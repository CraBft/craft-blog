import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Sidebar from './Sidebar'

export default {
  title: 'Components/Header/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <div
    style={{
      position: 'relative',
      boxSizing: 'border-box',
      height: '500vh',
    }}
  >
    <Sidebar {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  links: [...Array(5)].map((_, i) => {
    return {
      name: `link${i}`,
      url: '#',
    }
  }),
  onClose: () => {},
}
