import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'
import { nanoid } from 'nanoid'

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
Primary.args = {
  links: [
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
    {
      id: nanoid(),
      name: 'email',
      url: '',
    },
    {
      id: nanoid(),
      name: 'kakao',
      url: '',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: '',
    },
  ],
}
