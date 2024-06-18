import { TypeWideVersion } from ".";

export default {
  title: "Components/TypeWideVersion",
  component: TypeWideVersion,
  argTypes: {
    property1: {
      options: ["API", "python", "expanded-form", "YAML", "serverless", "frame-1000001909"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "API",
    className: {},
  },
};
