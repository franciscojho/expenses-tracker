import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'sans-serif',
    },
    colors: {},
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    shadows: {
      lightBlackSmall: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
  },
})
