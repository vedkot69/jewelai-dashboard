import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-background': 'var(--color-background)',
        'color-background-secondary': 'var(--color-background-secondary)',
        'color-card-dark': 'var(--color-card-dark)',
        'color-card-dark-alt': 'var(--color-card-dark-alt)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-text-muted': 'var(--color-text-muted)',
        'color-accent-gold': 'var(--color-accent-gold)',
        'color-accent-gold-light': 'var(--color-accent-gold-light)',
        'color-accent-green': 'var(--color-accent-green)',
        'color-accent-purple': 'var(--color-accent-purple)',
        'color-accent-red': 'var(--color-accent-red)',
        'color-accent-blue': 'var(--color-accent-blue)',
        'color-border-dark': 'var(--color-border-dark)',
      },
      borderRadius: {
        'radius-sm': 'var(--radius-sm)',
        'radius-md': 'var(--radius-md)',
        'radius-lg': 'var(--radius-lg)',
        'radius-xl': 'var(--radius-xl)',
        'radius-card': 'var(--radius-card)',
      },
      boxShadow: {
        'shadow-sm': 'var(--shadow-sm)',
        'shadow-md': 'var(--shadow-md)',
        'shadow-lg': 'var(--shadow-lg)',
        'shadow-xl': 'var(--shadow-xl)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
      },
    },
  },
  plugins: [],
};

export default config;
