import { Story, Meta } from '@storybook/react'
import { Button, CustomButtonProps } from './Button'

export default {
  title: 'Atoms/Buttons/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta

const runAlert = () => alert('Hello!')

const Template: Story<CustomButtonProps> = args => <Button {...args} />

export const Regular = Template.bind({})
Regular.args = {
  text: 'Welcome',
  onClick: runAlert,
}
