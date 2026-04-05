export const theme = {
  colors: {
    bg: {
      primary: '#F0F0EC',
      secondary: '#E8ECE4',
    },
    card: {
      dark: '#111111',
      darkAlt: '#1A1A2E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0AC',
      muted: '#666666',
    },
    accent: {
      gold: '#F5A623',
      goldLight: '#FFC95F',
      green: '#4ADE80',
      purple: '#A78BFA',
      red: '#EF4444',
      blue: '#3B82F6',
    },
    border: {
      dark: '#2D2D3D',
    },
  },
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    card: '1.25rem',
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.15)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
  },
} as const;
