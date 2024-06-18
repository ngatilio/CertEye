import { PoliciesAndControl } from ".";

export default {
  title: "Components/PoliciesAndControl",
  component: PoliciesAndControl,
  argTypes: {
    stateProp: {
      options: ["inactive-filter", "active-state"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "inactive-filter",
    className: {},
    iconsaxLinearClassName: {},
    lineClassName: {},
    searchClassName: {},
    dropDownArrowStateActiveClassName: {},
    dropDownArrowStateActiveClassNameOverride: {},
    iconsaxLinearClassNameOverride: {},
  },
};
