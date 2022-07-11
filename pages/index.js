import BaseContainer from '@/components/BaseContainer'
import Button from '@/components/Button'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

export default function Home() {
  return (
    <BaseContainer>
      <Flex
        direction="column"
        css={{
          height: '70%',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        <Icon variant="expenses" />
        <Text as="h1" size="xxl">
          EXPENSES <br />
          TRACKER
        </Text>
      </Flex>
      <Flex
        css={{
          height: '30%',
          alignItems: 'center',
        }}>
        <Button color="violet" type="fullRounded">
          <Icon variant="github" />
        </Button>
      </Flex>
    </BaseContainer>
  )
}
