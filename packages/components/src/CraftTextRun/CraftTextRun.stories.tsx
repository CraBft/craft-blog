import { ComponentMeta, ComponentStory } from '@storybook/react'
import CraftTextRun from './CraftTextRun'

export default {
  title: 'CraftTextRun',
  component: CraftTextRun,
} as ComponentMeta<typeof CraftTextRun>

const Template: ComponentStory<typeof CraftTextRun> = (props) => <CraftTextRun {...props} />

export const Default = Template.bind({})
Default.args = {
  text: {
    text: 'Hello World!',
  },
}

export const HighlightColor = Template.bind({})
HighlightColor.args = {
  text: {
    text: 'Hello World!',
    highlightColor: 'beachGradient',
  },
}

export const IsBold = Template.bind({})
IsBold.args = {
  text: {
    text: 'Hello World!',
    isBold: true,
  },
}

export const IsCode = Template.bind({})
IsCode.args = {
  text: {
    text: 'Hello World!',
    isCode: true,
  },
}

export const IsItalic = Template.bind({})
IsItalic.args = {
  text: {
    text: 'Hello World!',
    isItalic: true,
  },
}

export const IsStrikethrough = Template.bind({})
IsStrikethrough.args = {
  text: {
    text: 'Hello World!',
    isStrikethrough: true,
  },
}

export const UrlLink = Template.bind({})
UrlLink.args = {
  text: {
    text: 'Hello World!',
    link: {
      type: 'url',
      url: 'https://www.google.com',
    },
  },
}
