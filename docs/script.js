/* globals Docute */

new Docute({
  target: '#docute',
  //sourcePath: './',
  //banner: '<note :label="false">Please consider supporting this project through a small monthly <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=contact@muwaqqit.com&currency_code=GBP">PayPal donation<ExternalLinkIcon /></a>.</note>',
  nav: [
    {
      title: 'Muwaqqit',
      link: 'https://www.muwaqqit.com'
    },
  ],
  sidebar: [
    {
      title: 'Notes',
      links: [
        {
          title: 'Introduction',
          link: '/'
        },
        {
          title: 'Contact',
          link: '/contact'
        },
        {
          title: 'Technical notes',
          link: '/technical-notes'
        },
        {
          title: 'Patrons',
          link: '/patrons'
        },
      ],
    },
    {
      title: 'Definitions',
      links: [
        {
          title: 'Anti-transit',
          link: '/anti-transit'
        },
        {
          title: 'Fajr',
          link: '/fajr'
        },
        {
          title: 'Shurūq/Sunrise',
          link: '/sunrise'
        },
        {
          title: 'al-Ḍaḥwa al‑Ṣughrā',
          link: '/al-dahwa-al-sughra'
        },
        {
          title: 'al-Ḍaḥwa al‑Kubrā',
          link: '/al-dahwa-al-kubra'
        },
        {
          title: 'Istiwāʾ',
          link: '/istiwa'
        },
        {
          title: 'Transit',
          link: '/transit'
        },
        {
          title: 'Ẓuhr',
          link: '/zuhr'
        },
        {
          title: 'ʿAṣr al-Mithl al‑Awwal',
          link: '/asr-al-mithl-al-awwal'
        },
        {
          title: 'ʿAṣr al-Mithl al‑Thānī',
          link: '/asr-al-mithl-al-thani'
        },
        {
          title: 'Karāhah',
          link: '/karahah'
        },
        {
          title: 'Maghrib/Sunset',
          link: '/sunset'
        },
        {
          title: 'Ishtibāk al‑Nujūm',
          link: '/ishtibak-al-nujum'
        },
        {
          title: 'ʿIshāʾ',
          link: '/isha'
        },
        {
          title: 'Night fractions',
          link: '/night-fractions'
        },
        {
          title: 'Qiblah',
          link: '/qiblah'
        },
      ]
    },
    {
      title: 'Miscellaneous',
      links: [
        {
          title: 'Aqrab al-Ayyām',
          link: '/aqrab-al-ayyam'
        },
      ],
    },
    {
      title: 'API',
      links: [
        {
          title: 'API v1',
          link: '/api-v1'
        },
      ],
    },
  ],
  layout: 'left',
  plugins: [
    docuteKatex()
  ],
})
