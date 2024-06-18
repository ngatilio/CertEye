import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    state: {
      options: [
        "save-clone",
        "add",
        "print",
        "export",
        "update",
        "delete",
        "save-secondary",
        "print-all",
        "save",
        "import",
        "cancel",
        "apply",
        "save-new",
        "filter-cancel",
      ],
      control: { type: "select" },
    },
    height: {
      options: ["forty", "forty-six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "save-clone",
    height: "forty",
    className: {},
    startAndEndClassName: {},
  },
};
