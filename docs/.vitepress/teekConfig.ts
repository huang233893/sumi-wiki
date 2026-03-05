import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "Supermini233", link: "https://github.com/huang233893" },
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2026,
      suffix: "Supermini233",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  viewTransition: {
    enabled: true, // 是否启用深浅色切换动画效果
    mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
    duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
    easing: "ease-in", // 缓动函数
  },
    themeColor: {
      disabled: true, // 禁用布局主题色切换
      defaultColorName: "yellow", // 布局默认主题色
      defaultSpread: true, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
      disableHelp: false, // 禁用帮助提示
      disabledInMobile: false, // 是否在移动端禁用
   },
  windowTransition: true,
  articleBottomTip: frontmatter => {
    if (typeof window === "undefined") return;

    const hash = false;
    const query = false;
    const { origin, pathname, search } = window.location;
    const url = `${origin}${frontmatter.permalink ?? pathname}${query ? search : ""}${hash ? location.hash : ""}`;
    const author = "Supermini233";

    return {
      type: "tip",
      title: "声明", // 可选
      text: `<p>作者：${author}</p>
             <p style="margin-bottom: 0">链接：<a href="${decodeURIComponent(url)}" target="_blank">${decodeURIComponent(url)}</a></p>
             <p>版权：此文章版权归 ${author} 所有，如有转载，请注明出处!</p>
            `,
    };
  },
  articleShare: {
    enabled: true, // 是否开启文章链接分享功能
    text: "分享此页面", // 分享按钮文本
    copiedText: "链接已复制", // 复制成功文本
    query: false, // 是否包含查询参数
    hash: false, // 是否包含哈希值
  },
  copyright: {
      show: true, // 是否显示博客版权
      createYear: 2026, // 创建年份
      suffix: "酥米聚合地", // 后缀
  },
  comment: {
    provider: "waline", // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      // envId: "https://twi.sumi233.top",

      // waline 配置，官网：https://waline.js.org/
      serverURL: "https://wal.sumi233.top/",
      jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
      cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",

      // giscus 配置，官网：https://giscus.app/zh-CN
      // repo: "your name/your repo",
      // repoId: "your repoId",
      // category: "your category",
      // categoryId: "your categoryId",

      // artalk 配置，官网：https://artalk.js.org/
      // server: "your server",
      // site: "site",
    },
  },
    siteAnalytics: [
    { provider: "umami", options: { id: "093289aa-53ef-43f8-9ff0-54f0e10b6cdb", src: "https://vun.sumi233.top/script.js" } },
  ],
});