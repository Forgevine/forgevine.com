import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact-schema';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#39;';
    }
  });

export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Invalid form submission',
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, projectType, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set; contact form email was not sent.');
    return NextResponse.json(
      { error: 'Email service is not configured' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL || 'Forgevine Contact <onboarding@resend.dev>';
  const to = process.env.RESEND_TO_EMAIL || 'contact@forgevine.com';

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeMessage = escapeHtml(message);

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New contact form submission: ${projectType}`,
      tags: [{ name: 'source', value: 'forgevine-contact-form' }],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ededed;">
          <h2 style="color: #5FA89D; border-bottom: 2px solid #3E8B82; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin-top: 20px;">
            <p><strong style="color: #5FA89D;">Name:</strong> ${safeName}</p>
            <p><strong style="color: #5FA89D;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #7FC5B8;">${safeEmail}</a></p>
            <p><strong style="color: #5FA89D;">Project Type:</strong> ${safeProjectType}</p>
          </div>

          <div style="margin-top: 30px; padding: 15px; background-color: #1a1a1a; border-left: 4px solid #3E8B82;">
            <p><strong style="color: #5FA89D;">Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; text-align: center; color: #888; font-size: 12px;">
            <p>This email was sent from the Forgevine contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Project Type: ${projectType}

Message:
${message}

---
This email was sent from the Forgevine contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
