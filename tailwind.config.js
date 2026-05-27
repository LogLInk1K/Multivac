/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          // 1. 西文
          'Inter Variable', 
          'SF Pro Display', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          
          // 2. 中文
          'PingFang SC',
          'HarmonyOS Sans SC',
          'Microsoft YaHei',
          'Source Han Sans SC',
          'Noto Sans CJK SC',
          
          // 3. 兜底字体
          'Oxygen', 
          'Ubuntu', 
          'Cantarell', 
          'Open Sans', 
          'Helvetica Neue', 
          'sans-serif'
        ],

      },
      fontSize: {
        'display-xl': ['4.50rem', { lineHeight: '1.00', letterSpacing: '-1.584px', fontWeight: '510' }],
        'display-lg': ['4.00rem', { lineHeight: '1.00', letterSpacing: '-1.408px', fontWeight: '510' }],
        'display': ['3.00rem', { lineHeight: '1.00', letterSpacing: '-1.056px', fontWeight: '510' }],
        'h1': ['2.00rem', { lineHeight: '1.13', letterSpacing: '-0.704px', fontWeight: '400' }],
        'h2': ['1.50rem', { lineHeight: '1.33', letterSpacing: '-0.288px', fontWeight: '400' }],
        'h3': ['1.25rem', { lineHeight: '1.33', fontWeight: '590' }],
        'body-lg': ['1.13rem', { lineHeight: '1.60', fontWeight: '400' }],
        'body-emphasis': ['1.06rem', { lineHeight: '1.60', fontWeight: '590' }],
        'body': ['1.00rem', { lineHeight: '1.50', fontWeight: '400' }],
        'body-medium': ['1.00rem', { lineHeight: '1.50', fontWeight: '510' }],
        'body-semibold': ['1.00rem', { lineHeight: '1.50', fontWeight: '590' }],
        'small': ['0.94rem', { lineHeight: '1.60', fontWeight: '400' }],
        'small-medium': ['0.94rem', { lineHeight: '1.60', fontWeight: '510' }],
        'small-semibold': ['0.94rem', { lineHeight: '1.60', fontWeight: '590' }],
        'small-light': ['0.94rem', { lineHeight: '1.47', fontWeight: '300' }],
        'caption-lg': ['0.88rem', { lineHeight: '1.50', fontWeight: '510' }],
        'caption': ['0.81rem', { lineHeight: '1.50', fontWeight: '400' }],
        'label': ['0.75rem', { lineHeight: '1.40', fontWeight: '400' }],
        'micro': ['0.69rem', { lineHeight: '1.40', fontWeight: '510' }],
        'tiny': ['0.63rem', { lineHeight: '1.50', fontWeight: '400' }],
      },
      fontWeight: {
        '510': '510',
        '590': '590',
      },
      colors: {
        // 主色调 - 明亮的蓝色，与黑色背景形成鲜明对比
        primary: {
          light: '#425aef',
          dark: '#ffc848',
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
          light: 'rgba(255, 255, 255, 0.55)',
          dark: 'rgba(255, 255, 255, 0.04)',
        },
        // 边框色 - 中灰色，增强结构感
        border: {
          light: 'rgba(0, 0, 0, 0.06)',
          dark: 'rgba(255, 255, 255, 0.08)',
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
        // 数字徽章背景色
        badge: {
          light: '#f2f2f7',
          dark: '#2c2c2e',
        },
        // 分割线颜色（用于标签右侧数字背景）
        divider: {
          light: '#d1d1d6',
          dark: '#48484a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
