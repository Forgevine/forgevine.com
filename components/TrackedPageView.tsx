'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

/**
 * Component that automatically tracks page views when the route changes
 * This is useful for tracking navigation in client-side routing scenarios
 */
export function TrackedPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname, document.title);
    }
  }, [pathname]);

  return null;
}

