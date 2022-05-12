import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TagMenu from './TagMenu'

export default {
  title: 'Components/TagMenu',
  component: TagMenu,
} as ComponentMeta<typeof TagMenu>

const Template: ComponentStory<typeof TagMenu> = (args) => (
  <div style={{ padding: '20px 30px' }}>
    <TagMenu {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  tags: [
    'ALL',
    'javascript',
    'typescript',
    'react',
    'vue',
    'Angular',
    'Node',
    'Express',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'SQL',
    'NoSQL',
    'GraphQL',
    'Apollo',
    'Gatsby',
    'Next',
    'Git',
    'GitHub',
    'GitLab',
  ],
}
