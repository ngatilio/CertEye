import { Comment } from ".";

export default {
  title: "Components/Comment",
  component: Comment,
  argTypes: {
    property1: {
      options: ["component-229", "group-1000001884"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "component-229",
    className: {},
    chirinjiviClassName: {},
    chirinjivi: "/img/chirinjivi.png",
  },
};
