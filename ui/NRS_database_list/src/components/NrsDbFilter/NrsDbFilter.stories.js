import { NrsDbFilter } from ".";

export default {
  title: "Components/NrsDbFilter",
  component: NrsDbFilter,
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
