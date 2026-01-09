/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 主色调 - 明亮的蓝色，与黑色背景形成鲜明对比
        primary: {
          light: '#425aef',
          dark: '#425aef', // 明亮的蓝色作为主色调
        },
        // 背景色 - 纯黑色，现代感强
        background: {
          light: '#f7f9fe',
          dark: '#000000', // 纯黑色背景
        },
        // 文本色 - 纯白色，确保在黑色背景上的可读性
        text: {
          light: '#1F2937',
          dark: '#FFFFFF', // 纯白色文本
        },
        // 卡片色 - 深灰色，与纯黑背景形成层次
        card: {
          light: '#ffffff',
          dark: '#1A1A1A', // 深灰色卡片
        },
        // 边框色 - 中灰色，增强结构感
        border: {
          light: '#E2E8F0', // slate-200
          dark: '#333333', // 中灰色边框
        },
        // 悬停色 - 卡片的浅色版本，提供反馈
        hover: {
          light: '#F1F5F9', // slate-100
          dark: '#2A2A2A', // 浅灰色悬停
        },
        // 英雄图背景色 - 深灰色，与主色调协调
        hero: {
          light: '#F1F5F9', // slate-100
          dark: '#1A1A1A', // 深灰色英雄图背景
        },
        // 标签背景色 - 主色调的深色版本
        tag: {
          light: '#F1F5F9', // slate-100
          dark: '#1E3A8A', // 深蓝色标签背景
        },
      },
    },
  },
  plugins: [],
}
