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
    iconsaxLinear: "/img/iconsax-linear-useroctagon-3.svg",
    img: "/img/iconsax-linear-setting2-8.svg",
    iconsaxLinear1: "/img/iconsax-linear-profile2user-9.svg",
    iconsaxLinear2: "/img/iconsax-linear-building4-1.svg",
    iconsaxLinear3: "/img/iconsax-linear-documenttext1-9.svg",
    iconsaxLinear4: "/img/iconsax-linear-activity-9.svg",
  },
};
