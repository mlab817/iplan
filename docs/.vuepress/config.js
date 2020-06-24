const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'I-PLAN Operations Manual',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  // dest: 'public',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;523;600;700;800&display=swap', rel: 'stylesheet', type: 'text/css' } ],
    ['script', { src: 'https://code.iconify.design/1/1.0.6/iconify.min.js', type: 'text/javascript' } ]
  ],

  extraWatchFiles: ["**/*.md", "**/*.vue"],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/app-logo-128x128.png',
    repo: 'mlab817/iplan-om',
    repoLabel: 'Contribute',
    editLinks: true,
    docsDir: 'docs',
    docsRepo: 'mlab817/iplan-om',
    docsBranch: 'master',
    lastUpdated: 'Last Updated',
    editLinkText: 'Edit this page on GitHub',
    smoothScroll: true,
    extraWatchFiles: ["**/*.md", "**/*.vue"],
    nav: [
      {
        text: 'Manual',
        link: '/manual/',
      }
    ],
    sidebar: {
      '/manual/': [
        {
          title: 'Manual',
          collapsable: true,
          children: [
            '',
            'the-iplan-component',
            'implementation-policies',
            'implementation-processes'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@markspec/vuepress-plugin-footnote'
  ]
}
