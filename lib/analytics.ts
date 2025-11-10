/**
 * Google Analytics event tracking utilities
 * 
 * Usage:
 * import { trackEvent } from '@/lib/analytics';
 * 
 * trackEvent('button_click', {
 *   button_name: 'subscribe',
 *   location: 'header'
 * });
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export type EventParams = {
  [key: string]: string | number | boolean | undefined;
};

/**
 * Track a custom event in Google Analytics
 * @param eventName - The name of the event (e.g., 'button_click', 'form_submit')
 * @param params - Additional parameters to send with the event
 */
export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...params,
    });
  }
}

/**
 * Track page views manually (usually handled automatically by GoogleAnalytics component)
 * @param url - The URL of the page
 * @param title - The title of the page
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
      page_title: title,
    });
  }
}

/**
 * Set user properties in Google Analytics
 * @param properties - User properties to set
 */
export function setUserProperties(properties: EventParams): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties);
  }
}

