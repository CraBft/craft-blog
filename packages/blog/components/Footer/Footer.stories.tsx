import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => (
  <div
    style={{
      boxSizing: 'border-box',
      height: '200vh',
    }}
  >
    <Footer {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
