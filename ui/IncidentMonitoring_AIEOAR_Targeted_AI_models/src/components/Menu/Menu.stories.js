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
    iconsaxLinear: "/img/iconsax-linear-useroctagon-1.svg",
    img: "/img/iconsax-linear-arrowright2-10.svg",
    iconsaxLinear1: "/img/iconsax-linear-setting2-1.svg",
    iconsaxLinear2: "/img/iconsax-linear-arrowright2-10.svg",
    customerClassName: {},
    iconsaxLinear3: "/img/iconsax-linear-profile2user-1.svg",
    iconsaxLinear4: "/img/iconsax-linear-arrowright2-6.svg",
    frame: "/img/frame-128-1.svg",
    iconsaxLinear5: "/img/iconsax-linear-arrowright2-7.svg",
    customerClassNameOverride: {},
    iconsaxLinear6: "/img/iconsax-linear-building4-1.svg",
    divClassName: {},
    divClassNameOverride: {},
    iconsaxLinear7: "/img/iconsax-linear-documenttext1-1.svg",
    iconsaxLinear8: "/img/iconsax-linear-arrowright2-7.svg",
    divClassName1: {},
    iconsaxLinear9: "/img/iconsax-linear-arrowright2-6.svg",
    divClassName2: {},
    iconsaxLinear10: "/img/iconsax-linear-activity-1.svg",
  },
};
