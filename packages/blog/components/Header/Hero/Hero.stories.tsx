import { ComponentMeta, ComponentStory } from '@storybook/react'

import Hero from './Hero'

export default {
  title: 'Components/Header/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Hello World',
  subtitle: 'This is a subtitle',
  image: {
    src: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    alt: 'Photo by Michael Henry',
  },
}

export const Mobile1 = Template.bind({})
Mobile1.args = {
  title: 'Hello World',
  subtitle: 'This is a subtitle',
  image: {
    src: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    alt: 'Photo by Michael Henry',
  },
}
Mobile1.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}

export const Mobile2 = Template.bind({})
Mobile2.args = {
  title: 'Hello World',
  subtitle: 'This is a subtitle',
  image: {
    src: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    alt: 'Photo by Michael Henry',
  },
}
Mobile2.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
}

export const Tablet = Template.bind({})
Tablet.args = {
  title: 'Hello World',
  subtitle: 'This is a subtitle',
  image: {
    src: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    alt: 'Photo by Michael Henry',
  },
}
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
}
