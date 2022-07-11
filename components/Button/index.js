import { styled } from 'stitches.config'

const Button = styled('button', {
  height: '50px',
  width: '50px',
  border: 'none',
  cursor: 'pointer',
  variants: {
    type: {
      fullRounded: {
        borderRadius: '50%',
      },
    },
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
})

export default Button
