import { defineConfig } from 'vitepress'

// 站点根路径：因为部署在 daqiot.github.io/blog/ 子路径下，必须设置 base
// 否则 CSS / JS 等静态资源会全部 404
const BASE = '/blog/'
const HOSTNAME = 'https://daqiot.github.io/blog/'

export default defineConfig({
  // 站点基础信息（影响 <title> 和 SEO meta）
  title: 'DAQ-IOT 技术博客',
  description: '工业物联网、SCADA、能源管理、光伏新能源、数据采集、环境监测等技术文档',

  // 关键：子路径部署必须设置 base
  base: BASE,

  // 干净 URL：/article-name 而非 /article-name.html（更利于 SEO）
  cleanUrls: true,

  // 显示每篇文章的最后更新时间（Google 喜欢有时间戳的内容）
  lastUpdated: true,

  // 关键：自动生成 sitemap.xml，Google 靠它批量发现全部页面
  // hostname 必须带尾部斜杠，否则子路径部署下 sitemap URL 会丢失 /blog/ 前缀
  sitemap: {
    hostname: HOSTNAME,
    lastmodDateOnly: false
  },

  // 全局 head 标签
  head: [
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'DAQ-IOT' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'DAQ-IOT 技术博客' }],
    ['link', { rel: 'canonical', href: HOSTNAME + '/' }]
  ],

  // 主题配置
  themeConfig: {
    // 本地搜索（100+ 文章必备，无需外部服务）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文章',
            buttonAriaLabel: '搜索文章'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DAQIOT/blog' }
    ],

    // 大纲（右侧目录）
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    // 文档底部上下页导航
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 最后更新时间标签
    lastUpdated: {
      text: '最后更新'
    },

    // 返回顶部
    returnToTopLabel: '回到顶部',

    // 侧边栏标签
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
