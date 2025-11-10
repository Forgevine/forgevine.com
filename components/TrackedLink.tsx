'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName?: string;
  eventParams?: Record<string, string | number | boolean | undefined>;
  target?: string;
  rel?: string;
}

/**
 * A Link component that automatically tracks clicks with Google Analytics
 * 
 * @example
 * <TrackedLink 
 *   href="/about" 
 *   eventName="navigation_click"
 *   eventParams={{ link_text: "About", location: "header" }}
 * >
 *   About Us
 * </TrackedLink>
 */
export function TrackedLink({
  href,
  children,
  className,
  eventName = 'link_click',
  eventParams,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    const linkText = typeof children === 'string' ? children : 'link';
    
    trackEvent(eventName, {
      link_url: href,
      link_text: linkText,
      ...eventParams,
    });
  };

  // Check if it's an external link
  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');

  if (isExternal) {
    return (
      <a 
        href={href} 
        onClick={handleClick} 
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

