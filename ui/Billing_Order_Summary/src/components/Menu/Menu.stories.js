import { Menu } from ".";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    property1: {
      options: [
        "incident-monitoring-expand",
        "enforcement-2",
        "check-point",
        "policy-and-control",
        "EOAR",
        "side-menu",
        "checkpoint-2",
        "enforcement",
        "compliance-moitoring",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "incident-monitoring-expand",
    className: {},
    divClassName: {},
    iconsaxLinear: "/img/iconsax-linear-useroctagon-2.svg",
    AIPoliciesControlsClassName: {},
    iconsaxLinearClassName: {},
    divClassNameOverride: {},
    img: "/img/iconsax-linear-profile2user-9.svg",
    divClassName1: {},
    divClassName2: {},
    divClassName3: {},
    iconsaxLinear1: "/img/iconsax-linear-documenttext1-9.svg",
    iconsaxLinear2: "/img/iconsax-linear-activity-9.svg",
    divClassName4: {},
  },
};
