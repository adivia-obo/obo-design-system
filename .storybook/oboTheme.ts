// .storybook/storybookTheme.ts
import { create } from "@storybook/theming/create";

const myTheme = create({
  base: "light",
  brandTitle: "My custom Storybook",
  brandImage:
    "https://media.licdn.com/dms/image/v2/D560BAQEoKlgMd80DEA/company-logo_200_200/company-logo_200_200/0/1727106299591/onebyone_logistical_logo?e=1735776000&v=beta&t=0yqZ-SuR4CF5rK8zTIARrv0AOsFShHSEFNs9jtN4qMs",
  brandTarget: "_self",
});

export default myTheme;
