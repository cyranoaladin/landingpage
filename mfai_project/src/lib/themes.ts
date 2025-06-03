export const THEME = {
  colors: {
    primary: {
      green: '#14F195',
      violet: '#9945FF',
      blue: '#19AFFF',
      teal: '#5BFFB0',
    },
    background: {
      dark: '#0B0B0F',
      light: '#181825',
      card: '#1E1E3F',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.8)',
      muted: 'rgba(255, 255, 255, 0.6)',
    },
  },
  fonts: {
    primary: 'Poppins',
    secondary: 'Orbitron',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const; 