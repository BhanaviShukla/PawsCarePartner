import { DefaultSeoProps } from 'next-seo/lib/types';
//https://www.npmjs.com/package/next-seo#nextseo-options
export const defaultSeo: DefaultSeoProps = {
  title: 'Web FrontEnd template',
  titleTemplate: 'FrontEnd template | %s',
  description: 'Default description',
  openGraph: {
    type: 'website',
    locale: 'en-us', //todo: dynamic locale from nextJs
    url: 'https://yourdomain.com',
    title: 'PWA nextJs App',
    description: 'Bootstrapped PWA app using nextJs',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    site_name: 'PWA App',
    images: [
      {
        url: '/assets/pwa/og-image-01.png',
        width: 1240,
        height: 480,
        alt: 'og-image-01-alt'
      },
      {
        url: '/assets/pwa/og-image-02.png',
        width: 800,
        height: 600,
        alt: 'og-image-02-alt'
      }
    ]
  },
  twitter: {
    handle: '@Maradona',
    site: '@site',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content:
        'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
    },
    { name: 'application-name', content: 'PWA App' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Web FrontEnd template' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'msapplication-config', content: '/assets/pwa/browserconfig.xml' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'msapplication-TileImage', content: '/assets/pwa/og-image-01.png' },
    { name: 'msapplication-tap-highlight', content: 'no' },
    { name: 'theme-color', content: '#fff' }
  ],
  additionalLinkTags: [
    { rel: 'apple-touch-icon', href: '/assets/pwa/touch-icon-iphone.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/pwa/touch-icon-ipad.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/pwa/touch-icon-iphone-retina.png' },
    { rel: 'apple-touch-icon', sizes: '167x167', href: '/assets/pwa/touch-icon-ipad-retina.png' },
    { rel: 'icon', sizes: '32x32', href: '/assets/pwa/favicon.ico' },
    { rel: 'icon', sizes: '16x16', href: '/assets/pwa/favicon.ico' },
    { rel: 'shortcut', href: '/assets/pwa/favicon.ico' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'mask-icon', href: '/assets/pwa/safari-pinned-tab.svg', color: '#FF0000' },
    { rel: 'apple-touch-startup-image', sizes: '2048x2732', href: '/assets/pwa/apple_splash_2048.png' },
    { rel: 'apple-touch-startup-image', sizes: '1668x2224', href: '/assets/pwa/apple_splash_1668.png' },
    { rel: 'apple-touch-startup-image', sizes: '1536x2048', href: '/assets/pwa/apple_splash_1536.png' },
    { rel: 'apple-touch-startup-image', sizes: '1125x2436', href: '/assets/pwa/apple_splash_1125.png' },
    { rel: 'apple-touch-startup-image', sizes: '1242x2208', href: '/assets/pwa/apple_splash_1242.png' },
    { rel: 'apple-touch-startup-image', sizes: '750x1334', href: '/assets/pwa/apple_splash_750.png' },
    { rel: 'apple-touch-startup-image', sizes: '640x1136', href: '/assets/pwa/apple_splash_640.png' }
  ]
};
