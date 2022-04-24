import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tag from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const MenuType = Template.bind({})
MenuType.args = {
  name: 'ALL',
  onClick: () => {},
  view: 'menu',
}

export const CardType = Template.bind({})
CardType.args = {
  name: 'Javascript',
  onClick: () => {},
  view: 'card',
}

export const ContentType = Template.bind({})
ContentType.args = {
  name: 'content',
  onClick: () => {},
  view: 'content',
}
