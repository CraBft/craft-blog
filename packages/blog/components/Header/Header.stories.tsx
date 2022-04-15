import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <div
    style={{
      boxSizing: "border-box",
      height: "200vh",
    }}
  >
    <Header {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
