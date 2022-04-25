import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SearchIcon from './SearchIcon'

export default {
  title: 'Components/Header/SearchIcon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>

const Template: ComponentStory<typeof SearchIcon> = (args) => <SearchIcon stroke={'black'} fill={'black'} {...args} />

export const Default = Template.bind({})
Default.args = {}
