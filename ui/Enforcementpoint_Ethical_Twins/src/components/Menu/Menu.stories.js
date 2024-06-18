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
    iconsaxLinear: "/img/iconsax-linear-useroctagon-2.svg",
    img: "/img/iconsax-linear-arrowright2-12.svg",
    iconsaxLinear1: "/img/iconsax-linear-setting2-1.svg",
    iconsaxLinear2: "/img/iconsax-linear-arrowright2-12.svg",
    rolesClassName: {},
    iconsaxLinear3: "/img/iconsax-linear-profile2user-1.svg",
    divClassName: {},
    iconsaxLinear4: "/img/iconsax-linear-arrowright2-8.svg",
    divClassNameOverride: {},
    iconsaxLinear5: "/img/iconsax-linear-arrowright2-16.svg",
    divClassName1: {},
    frame: "/img/frame-128-1.svg",
    iconsaxLinear6: "/img/iconsax-linear-arrowright2-9.svg",
    iconsaxLinear7: "/img/iconsax-linear-building4-1.svg",
    iconsaxLinear8: "/img/iconsax-linear-documenttext1-2.svg",
    iconsaxLinear9: "/img/iconsax-linear-arrowright2-9.svg",
    iconsaxLinear10: "/img/iconsax-linear-activity-2.svg",
  },
};
