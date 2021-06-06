import { Story } from '@storybook/react'
import { Row, RowProps } from './Row'
import { generateItems } from '../../../utils/storybook'

export default {
  title: 'Atoms/Containers/Row',
  component: Row,
}

const Template: Story<RowProps> = args => (
  <Row {...args} style={{ background: 'tomato' }}>
    {generateItems(5)}
  </Row>
)

export const SimpleRow = Template.bind({})
SimpleRow.args = {}

export const SpaceBetweenRow = Template.bind({})
SpaceBetweenRow.args = {
  justifyContent: 'space-between',
}
