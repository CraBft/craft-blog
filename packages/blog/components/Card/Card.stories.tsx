import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>

export const Primary = Template.bind({})
Primary.args = {
  img: 'https://avatars.githubusercontent.com/u/76904042?v=4',
  alt: 'img',
  title: 'Title',
  description: 'descriptiondescriptiondescriptiondescription',
  date: '00.00.00',
}
