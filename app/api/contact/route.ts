import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const resend = getResend();
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'ForgeVine Contact <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'contact@forgevine.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ededed;">
          <h2 style="color: #5FA89D; border-bottom: 2px solid #3E8B82; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin-top: 20px;">
            <p><strong style="color: #5FA89D;">Name:</strong> ${name}</p>
            <p><strong style="color: #5FA89D;">Email:</strong> <a href="mailto:${email}" style="color: #7FC5B8;">${email}</a></p>
            <p><strong style="color: #5FA89D;">Project Type:</strong> ${projectType}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #1a1a1a; border-left: 4px solid #3E8B82;">
            <p><strong style="color: #5FA89D;">Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; text-align: center; color: #888; font-size: 12px;">
            <p>This email was sent from the ForgeVine contact form.</p>
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
This email was sent from the ForgeVine contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

