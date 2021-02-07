module.exports = {
  title: '前端进阶',
  description: '雾灵个人网站',
  head: [
    ['link', { rel: 'icon',type: "image/x-icon", href: '/img/icon.ico' }],
    ['link', { rel: 'manifest', href: '/public/Manifest.json' }]// 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      { text: '主页', link: '/' },
        {text: '前端基础', items:[
        { text: 'Html', link: '/html/' },
        { text: 'Css', link: '/css/' },
        { text: 'JavaScript', link: '/js/' },
        { text: 'Node', link: '/node/' }
      ] },
      {text: '算法题库', link: '/algorithm/'},
      {text: '框架源码', link: '/sourceCode/'},
      {text:'其他',link: '/other/'},
      {text: 'github', link: 'https://github.com/XINXINP'},
      {text: '掘金', link: 'https://juejin.cn/user/272334614965319'}      
    ],
    serviceWorker: true,
    sidebar:{
      '/sourceCode/':[
      {
          title: "框架源码解读",
          collapsable: true,
          path: "",
          children: [
            { title: "vue框架源码解读", path: "/vue/" },
            { title: "jquery框架源码解读", path: "/jquery/" },
          ],
        },
    ],
    '/algorithm/':[
      {
          title: "算法题库",
          collapsable: true,
          path: "",
          children: [
            { title: "数据结构", path: "/algorithm/" },
            { title: "排序算法", path: "/sort/" },
            { title: "算法题", path: "/question/" },
          ],
        },
    ]
    },// 侧边栏配置
    sidebarDepth: 6, // 侧边栏显示2级
  }
};