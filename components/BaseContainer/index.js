import { styled } from 'stitches.config'

export const BaseContainer = styled('div', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '2rem',
  '@bp1': { width: '500px', height: '95vh', boxShadow: '$lightBlackSmall' },
})

export default BaseContainer
