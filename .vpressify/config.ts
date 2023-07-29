import { defineConfig } from "vpressify";
import type { ThemeConfig } from "vpressify/theme";

export default defineConfig<ThemeConfig>({
  pages: "src/docs",
  vite: {
    base: "/lexical-poc/",
  },
  themeConfig: {
    locale: "en-US",
    localeText: "English",
    title: "Lexical-react",
    description: "Web content editor based on React and Lexical",
    docsRepo: "v-poc/vite-react-lexical-poc",
    docsBranch: "main",
    editLink: true,
    themeConfigByPaths: {
      "/en": {
        locale: "en-US",
        localeText: "English",
        nav: [
          // {
          //   text: "Playground",
          //   icon: "tabler:ghost",
          //   link: "/en/playground/",
          // },
          {
            text: "Links",
            icon: "lucide:link",
            items: [
              {
                text: "Lexical.dev",
                icon: "lucide:clipboard-edit",
                link: "https://lexical.dev/",
              },
              {
                text: "Vite",
                icon: "tabler:bolt",
                link: "https://vitejs.dev/",
              },
            ],
          },
          {
            text: " ",
            icon: "lucide:languages",
            items: [{ text: "English", link: "/" }],
          },
          {
            icon: "uiw/github",
            link: "https://github.com/v-poc/vite-react-lexical-poc",
          },
        ],
        sidebar: [
          {
            text: "Getting Started",
            icon: "lucide:puzzle",
            link: "/en/getting-started/",
          },
          {
            text: "Experimental",
            icon: "lucide:slack",
            items: [
              // {
              //   text: "Rich Text Editor",
              //   link: "/en/rich-editor/",
              // },
              {
                text: "Plain Text",
                link: "/en/plain-text/",
              },
              // {
              //   text: "Playground",
              //   link: "/en/playground/",
              // },
            ],
          },
        ],
      },
    },
  },
});
