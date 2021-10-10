const siteMetadata = {
  title: 'Anuar Ustayev\'s personal website',
  author: 'Anuar Ustayev',
  headerTitle: 'Anuar Ustayev',
  description: 'Anuar Ustayev\'s personal website',
  language: 'en-us',
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'anuar.ustayev@gmail.com',
  github: 'https://github.com/anuveyatsu',
  linkedin: 'https://www.linkedin.com/in/anuveyatsu/',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
}

module.exports = siteMetadata
