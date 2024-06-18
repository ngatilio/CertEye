import { DropDownArrow } from ".";

export default {
  title: "Components/DropDownArrow",
  component: DropDownArrow,
  argTypes: {
    state: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
    position: {
      options: ["left", "up", "right", "down"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "inactive",
    position: "left",
    className: {},
    stateInactive: "/img/state-inactive-position-down.svg",
  },
};
