import { styled } from 'stitches.config'
import { GitHubLogoIcon, Cross2Icon } from '@radix-ui/react-icons'

const GithubIcon = styled(GitHubLogoIcon, {
  height: '25px',
  width: '25px',
  color: 'white',
  verticalAlign: 'middle',
})

const ExpensesIcon = styled(Cross2Icon, {
  height: '100px',
  width: '100px',
  color: 'blueviolet',
})

const Icon = ({ variant }) => {
  if (variant === 'github') {
    return <GithubIcon />
  } else if (variant === 'expenses') {
    return <ExpensesIcon />
  }

  return <span>Icon Goes Here</span>
}

export default Icon
