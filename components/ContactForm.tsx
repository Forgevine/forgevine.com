'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trackEvent } from '@/lib/analytics';
import {
  contactSchema,
  projectTypes,
  type ContactFormData,
} from '@/lib/contact-schema';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      trackEvent('contact_form_submit', {
        project_type: data.projectType,
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();

      trackEvent('contact_form_success', {
        project_type: data.projectType,
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      trackEvent('contact_form_error', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#5FA89D]">
            Contact
          </p>
          <h2 className="mb-4 bg-gradient-to-r from-[#5FA89D] via-[#3E8B82] to-[#7FC5B8] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Start a quiet conversation
          </h2>
          <p className="text-lg text-slate-300">
            Tell us what you are building. NDA-friendly, no deck required.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative space-y-6 rounded-2xl border border-slate-800/50 bg-slate-900/50 p-8 backdrop-blur-sm"
        >
          {/* Success message */}
          {submitStatus === 'success' && (
            <div className="p-4 rounded-lg bg-[#3E8B82]/20 border border-[#3E8B82]/50 text-[#5FA89D]">
              Thank you. Your message is in. We will get back to you within two
              business days.
            </div>
          )}

          {/* Error message */}
          {submitStatus === 'error' && (
            <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {/* Left column — contact details */}
            <div className="space-y-6 md:col-span-2">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3E8B82] focus:ring-1 focus:ring-[#3E8B82] transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3E8B82] focus:ring-1 focus:ring-[#3E8B82] transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Project type field */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                  Project Type *
                </label>
                <select
                  {...register('projectType')}
                  id="projectType"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 focus:outline-none focus:border-[#3E8B82] focus:ring-1 focus:ring-[#3E8B82] transition-colors"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-400">{errors.projectType.message}</p>
                )}
              </div>
            </div>

            {/* Right column — message and submit */}
            <div className="flex flex-col gap-6 md:col-span-3">
              {/* Message field */}
              <div className="flex flex-1 flex-col">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full min-h-[180px] flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#3E8B82] focus:ring-1 focus:ring-[#3E8B82] transition-colors resize-none"
                  placeholder="Tell us what you are building — rough is fine..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#3E8B82] to-[#5FA89D] text-white font-semibold hover:from-[#5FA89D] hover:to-[#7FC5B8] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#3E8B82]/20 hover:shadow-[#3E8B82]/40"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-center font-mono text-xs text-slate-500">
                Under NDA by default. Nothing you send is published.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
