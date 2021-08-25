import type { UserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";

const config: UserConfig<DefaultThemeOptions> = {
  base: process.env.VuePress_BASE || "/",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "Mr.Hope" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Markdown Enhance Plugin",

      description: "Markdown Enhancement for VuePress",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Markdown 增强",
      description: "VuePress 的 Markdown 增强插件",
    },
  },

  themeConfig: {
    logo: "/logo.svg",

    locales: {
      "/": {
        lang: "en-US",
        selectText: "Language",
        ariaLabel: "Select language",
        label: "English",
        editLinkText: "Edit on Github",

        navbar: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide/" },
          { text: "Config", link: "/api/" },
        ],

        sidebar: {
          "/guide/": [
            "/guide/README.md",
            "/guide/sup-sub.md",
            "/guide/align.md",
            "/guide/footnote.md",
            "/guide/mermaid.md",
            "/guide/tex.md",
            "/guide/presentation/README.md",
            "/guide/presentation/demo.md",
            "/guide/presentation/themes.md",
          ],

          "/": ["/README.md", "/guide/README.md"],
        },
      },
      "/zh/": {
        lang: "zh-CN",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        lastUpdatedText: "上次编辑于",
        selectLanguageName: "简体中文",
      },
    },

    repo: "https://github.com/mister-hope/vuepress-plugin-md-enhance",
    docsDir: "docs",
    repoLabel: "Github",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",

    themePlugins: {
      container: {
        tip: false,
        warning: false,
        danger: false,
        details: false,
      },
    },
  },

  plugins: [
    [
      "md-enhance",
      {
        enableAll: true,
        presentation: {
          plugins: [
            "highlight",
            "math",
            "search",
            "notes",
            "zoom",
            "anything",
            "audio",
            "chalkboard",
          ],
        },
      },
    ],
  ],
};

export default config;
