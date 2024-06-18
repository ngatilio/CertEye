import { ApiOrServerless } from ".";

export default {
  title: "Components/ApiOrServerless",
  component: ApiOrServerless,
  argTypes: {
    property1: {
      options: ["URL", "hook"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "URL",
    className: {},
  },
};
