import { CookieManagerProvider } from '@/components/CookieManager/CookieManagerProvider.tsx';
import ClientAnalyticsScript from '@/components/ClientAnalyticsScript/ClientAnalyticsScript.tsx';
import { isDevelopment } from '@/constants.ts';
/*
 * CJS import
 * This import structure for CookieBanner is necessary because in prod, direct
 * destructuring from @coinbase/cookie-banner fails.
 * However in dev, the import fails because the pkg is not found.
 * This structure allows the import to work in prod, and disables the banner in dev.
 */
import pkg from '@coinbase/cookie-banner';
const { CookieBanner } = isDevelopment ? {} : pkg;

export const cookieBannerTheme = {
  colors: {
    primary: '#1652F0',
    positive: '#05B169',
    negative: '#DF5F67',
    warning: '#F4C622',
    background: '#FFFFFF',
    backgroundMuted: '#EEF0F3',
    onBackground: '#050F1A',
    onBackgroundMuted: '#0A0B0D',
    onPrimary: '#FFFFFF',
    overlay: 'rgba(17,52,83,0.6)',
  },
  border: {
    border: '1px solid #D8D8D8',
    borderRadius: '4px',
  },
  fontSize: {
    sm: '14px',
    md: '16px',
  },
  fontWeight: {
    regular: '400',
    bold: '500',
  },
  size: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
  },
  breakpoints: {
    phone: 560,
    desktop: 992,
    tablet: 768,
  },
  zIndex: {
    hidden: 0,
    normal: 1,
    elevated: 2,
    high: 2,
    extraHigh: 3,
    backdrop: 999,
    overlay: 1000,
    top: 1001,
  },
};

export default function CookieBannerWrapper() {
  if (isDevelopment || typeof window === 'undefined') return null;

  return (
    <CookieManagerProvider>
      <ClientAnalyticsScript />
      <CookieBanner companyName="Base" link="/cookie-policy" theme={cookieBannerTheme} />
    </CookieManagerProvider>
  );
}
