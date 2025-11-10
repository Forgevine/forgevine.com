/**
 * Example usage of Google Analytics event tracking
 * 
 * This file demonstrates how to use the analytics utilities in your components.
 * You can delete this file once you understand how to use it.
 */

'use client';

import { trackEvent } from '@/lib/analytics';

export function ExampleButton() {
  const handleClick = () => {
    // Track a button click event
    trackEvent('button_click', {
      button_name: 'example_button',
      location: 'homepage',
      action: 'click',
    });
    
    // Your button logic here
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me (tracked)
    </button>
  );
}

// Example: Track form submissions
export function ExampleForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    trackEvent('form_submit', {
      form_name: 'contact_form',
      form_location: 'contact_page',
    });
    
    // Your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
    </form>
  );
}

// Example: Track link clicks
export function ExampleLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = () => {
    trackEvent('link_click', {
      link_url: href,
      link_text: typeof children === 'string' ? children : 'link',
    });
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

