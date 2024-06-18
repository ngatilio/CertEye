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
    rolesClassName: {},
    iconsaxLinear: "/img/iconsax-linear-useroctagon-7.svg",
    AIPoliciesControlsClassName: {},
    img: "/img/iconsax-linear-arrowright2-46.svg",
    divClassName: {},
    iconsaxLinear1: "/img/iconsax-linear-setting2-1.svg",
    iconsaxLinear2: "/img/iconsax-linear-profile2user-2.svg",
    iconsaxLinear3: "/img/iconsax-linear-arrowright2-46.svg",
    frame: "/img/frame-128-8.svg",
    iconsaxLinear4: "/img/iconsax-linear-building4-8.svg",
    iconsaxLinear5: "/img/iconsax-linear-documenttext1-1.svg",
    iconsaxLinear6: "/img/iconsax-linear-activity-1.svg",
  },
};
