import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <div
    style={{
      position: 'relative',
      boxSizing: 'border-box',
      height: '500vh',
    }}
  >
    <Header {...args} />
  </div>
)

export const Home = Template.bind({})
Home.args = {}
Home.parameters = {
  nextRouter: {
    pathname: '/',
    asPath: '/',
    query: {},
  },
}

export const OtherPage = Template.bind({})
OtherPage.args = {}
OtherPage.parameters = {
  nextRouter: {
    pathname: '/other-page',
    asPath: '/other-page',
    query: {},
  },
}
