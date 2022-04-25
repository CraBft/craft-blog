import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import MenuIcon from './MenuIcon'

export default {
  title: 'Components/Header/MenuIcon',
  component: MenuIcon,
} as ComponentMeta<typeof MenuIcon>

const Template: ComponentStory<typeof MenuIcon> = (args) => <MenuIcon stroke={'black'} {...args} />

export const Open = Template.bind({})
Open.args = {
  isOpen: true,
}

export const Close = Template.bind({})
Close.args = {
  isOpen: false,
}
