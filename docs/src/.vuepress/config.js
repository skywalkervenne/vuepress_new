const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '我的技术分享',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
    ],
    sidebar: [
      {
        title: 'Life',   // required
        path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/guide/new-idea.md',
          '/guide/using-vue.md',
        ]
      },
      {
        title: 'Destinations',
        collapsable: false,
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/destinations/japan.md',
          '/destinations/xiamen',
          '/destinations/hangzhou',
          '/destinations/shanghai',
          '/destinations/beijing',
          '/destinations/xian',
          '/destinations/chongqing',
          '/destinations/northwest', 
        ],
        //initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      },
    ],
/**
    sidebar: [
      {
        title: 'Guide',   // required
        path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'README.md',
          'using-vue.md',
          'new-idea.md',
        ]
      },
      {
        title: 'Destination',
        path: '/destination/', 
        children: [
          'japan.md',
          'xiamen',
          'hangzhou',
          'shanghai',
          'beijing',
          'xian',
          'chongqing',
          'northwest', 
        ],
        //initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      }
    ]
  },
**/
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
}
