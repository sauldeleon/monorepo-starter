import { Story } from '@storybook/react'
import { generateItems } from '../../../utils/storybook'
import { Column, ColumnProps } from './Column'

export default {
  title: 'Atoms/Containers/Column',
  component: Column,
}

const Template: Story<ColumnProps> = args => (
  <Column {...args} style={{ background: 'tomato' }}>
    {generateItems(5)}
  </Column>
)

export const SimpleColumn = Template.bind({})
SimpleColumn.args = {}

export const SpaceBetweenColumn = Template.bind({})
SpaceBetweenColumn.args = {
  justifyContent: 'space-between',
  height: '500px',
}
