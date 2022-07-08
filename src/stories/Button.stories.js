import Button from "../component/Button"

//default export
export default {
  title: "Component/Button", // This is how to group together the stories under Component
  component: Button, //optional: it is basically equal to the button component that we have imported, should include cause some of the addons rely on this property
  argTypes: {
     handleClick: { action: "clicked!" } ,
     handleMouseOver: {action: "MouseOver"}
    }, //optional
}

const Template = args => <Button {...args} /> //creating template out of button component

//named exports
export const Red = Template.bind({}) // passing empty object
Red.args = { //args object  is simply the props that we want to pass in and we specify the props as key value pairs
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
}