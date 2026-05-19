import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:    '#0A5C8A',
        'primary-mid': '#1279B0',
        'primary-lt':  '#2196CC',
        teal:       '#00869B',
        'teal-light': '#00A8C0',
        'teal-pale':  '#D6F0F5',
        cyan:       '#00C4D4',
        ink:        '#0D1F2D',
        'ink-mid':  '#2C4A5E',
        'ink-muted':'#6B8FA8',
        'off-white': '#F4F8FB',
      },
      fontFamily: {
        syne:    ['Syne', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grad-hero': 'linear-gradient(135deg, #0A5C8A 0%, #00869B 60%, #00C4D4 100%)',
        'grad-btn':  'linear-gradient(135deg, #1279B0, #00869B)',
      },
      boxShadow: {
        sm: '0 2px 12px rgba(10,92,138,0.08)',
        md: '0 8px 40px rgba(10,92,138,0.14)',
        lg: '0 20px 80px rgba(10,92,138,0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
