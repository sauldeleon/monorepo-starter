import { Story } from '@storybook/react'
import { generateItems } from '../../../utils/storybook'
import { Flex, FlexProps } from './Flex'

export default {
  title: 'Atoms/Containers/Flex',
  component: Flex,
}

const Template: Story<FlexProps> = args => (
  <Flex {...args} style={{ background: 'tomato' }}>
    {generateItems(5)}
  </Flex>
)

export const SimpleColumnFlex = Template.bind({})
SimpleColumnFlex.args = {
  flexDirection: 'column',
}

export const SimpleRowFlex = Template.bind({})
SimpleRowFlex.args = {
  flexDirection: 'row',
}
