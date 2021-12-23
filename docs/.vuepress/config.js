module.exports = {
  title: 'JavaScript高级程序设计',
  description: 'JavaScript高级程序设计',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: '/JavaScript-pro/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'JavaScript博客',
        items: [
          { text: 'Github', link: 'https://github.com/codehzy' },
          { text: '掘金', link: 'https://juejin.cn/user/1714893872178823' },
          { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, //折叠
        children: [{ title: '学前必读', path: '/' }]
      },
      {
        title: '基础学习',
        path: '/handbook/01_browser-history',
        collapsable: false, //折叠
        children: [
          { title: '浏览器历史', path: '/handbook/01_browser-history' },
          { title: 'JavaScript', path: '/handbook/02_java-script' }
        ]
      }
    ],
    // 开始多级标题展示
    subSideBar: 'auto'
  }
}
