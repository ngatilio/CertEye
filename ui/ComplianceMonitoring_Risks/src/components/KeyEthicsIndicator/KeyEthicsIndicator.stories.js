import { KeyEthicsIndicator } from ".";

export default {
  title: "Components/KeyEthicsIndicator",
  component: KeyEthicsIndicator,
  argTypes: {
    property1: {
      options: ["security", "transparency", "sustainability", "default", "fairness", "expanded", "performance"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "security",
    className: {},
  },
};
