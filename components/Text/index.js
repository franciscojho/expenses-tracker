import { styled } from 'stitches.config'

const Text = styled('p', {
  variants: {
    size: {
      sx: {
        fontSize: '$1',
      },
      sm: {
        fontSize: '$2',
      },
      md: {
        fontSize: '$3',
      },
      lg: {
        fontSize: '$4',
      },
      xl: {
        fontSize: '$5',
      },
      xxl: {
        fontSize: '$6',
      },
    },
  },
})

export default Text
