import React from "react";
import { ColorItem } from "@storybook/blocks";

export interface Color {
  title: string;
  subtitle: string;
  colors: { [key: string]: string };
}

export const colorItems: Color[] = [
  {
    title: "Neutral",
    subtitle: "Default",
    colors: { White: "#fbfbfb", Black: "#131313" },
  },
  {
    title: "Neutral",
    subtitle: "Hover",
    colors: { White: "#e9e9e9", Black: "#171717" },
  },
  {
    title: "Gray",
    subtitle: "Default",
    colors: {
      10: "#F4F4F4",
      20: "#E0E0E0",
      30: "#C6C6C6",
      40: "#A8A8A8",
      50: "#8D8D8D",
      60: "#6F6F6F",
      70: "#525252",
      80: "#393939",
      90: "#262626",
      100: "#161616",
    },
  },
  {
    title: "Gray",
    subtitle: "Hover",
    colors: {
      10: "#E8E8E8",
      20: "#D1D1D1",
      30: "#B5B5B5",
      40: "#999999",
      50: "#7A7A7A",
      60: "#5E5E5E",
      70: "#636363",
      80: "#474747",
      90: "#333333",
      100: "#292929",
    },
  },
  {
    title: "Red",
    subtitle: "Default",
    colors: {
      10: "#FFF1F1",
      20: "#FFD7D9",
      30: "#FFB3B8",
      40: "#FF8389",
      50: "#FA4D56",
      60: "#DA1E28",
      70: "#A2191F",
      80: "#750E13",
      90: "#520408",
      100: "#2D0709",
    },
  },
  {
    title: "Red",
    subtitle: "Hover",
    colors: {
      10: "#FFE0E0",
      20: "#FFC2C5",
      30: "#FF99A0",
      40: "#FF6168",
      50: "#EE0713",
      60: "#B81922",
      70: "#C21E25",
      80: "#921118",
      90: "#66050A",
      100: "#3C0508",
    },
  },
  {
    title: "Orange",
    subtitle: "default",
    colors: {
      10: "#FFF2E8",
      20: "#FFD9BE",
      30: "#FFB784",
      40: "#FF832B",
      50: "#EB6200",
      60: "#BA4E00",
      70: "#8A3800",
      80: "#5E2900",
      90: "#3E1A00",
      100: "#231000",
    },
  },
  {
    title: "Orange",
    subtitle: "Hover",
    colors: {
      10: "#FFE2CC",
      20: "#FFC69E",
      30: "#FF9D57",
      40: "#FA6800",
      50: "#CC5500",
      60: "#9E4200",
      70: "#A84400",
      80: "#753300",
      90: "#522200",
      100: "#421E00",
    },
  },
  {
    title: "Yellow",
    subtitle: "Default",
    colors: {
      10: "#FCF4D6",
      20: "#FDDC69",
      30: "#F1C21B",
      40: "#D2A106",
      50: "#B28600",
      60: "#8E6A00",
      70: "#684E00",
      80: "#483700",
      90: "#302400",
      100: "#1C1500",
    },
  },
  {
    title: "Yellow",
    subtitle: "Hover",
    colors: {
      10: "#F8E6A0",
      20: "#FCCD27",
      30: "#DDB00E",
      40: "#BC9005",
      50: "#9E7700",
      60: "#755800",
      70: "#806000",
      80: "#5C4600",
      90: "#3D2E00",
      100: "#271E01",
    },
  },
  {
    title: "Green",
    subtitle: "Default",
    colors: {
      10: "#DEFBE6",
      20: "#A7F0BA",
      30: "#6FDC8C",
      40: "#42BE65",
      50: "#24A148",
      60: "#198038",
      70: "#0E6027",
      80: "#044317",
      90: "#022D0D",
      100: "#071908",
    },
  },
  {
    title: "Green",
    subtitle: "Hover",
    colors: {
      10: "#B6F6C8",
      20: "#74E792",
      30: "#36CE5E",
      40: "#3BAB5A",
      50: "#208E3F",
      60: "#166F31",
      70: "#11742F",
      80: "#05521C",
      90: "#033B11",
      100: "#08250A",
    },
  },
  {
    title: "Blue",
    subtitle: "Default",
    colors: {
      10: "#EDF5FF",
      20: "#D0E2FF",
      30: "#A6C8FF",
      40: "#78A9FF",
      50: "#4589FF",
      60: "#0F62FE",
      70: "#0043CE",
      80: "#002D9C",
      90: "#001D6C",
      100: "#001141",
    },
  },
  {
    title: "Blue",
    subtitle: "Hover",
    colors: {
      10: "#DBEBFF",
      20: "#B8D3FF",
      30: "#8AB6FF",
      40: "#5C97FF",
      50: "#1F70FF",
      60: "#0050E6",
      70: "#0053FF",
      80: "#0039C7",
      90: "#00258A",
      100: "#001F75",
    },
  },
  {
    title: "Cyan",
    subtitle: "Default",
    colors: {
      10: "#E5F6FF",
      20: "#BAE6FF",
      30: "#82CFFF",
      40: "#33B1FF",
      50: "#1192E8",
      60: "#0072C3",
      70: "#00539A",
      80: "#003A6D",
      90: "#012749",
      100: "#061727",
    },
  },
  {
    title: "Cyan",
    subtitle: "Hover",
    colors: {
      10: "#CCEEFF",
      20: "#99DAFF",
      30: "#57BEFF",
      40: "#059FFF",
      50: "#0F7EC8",
      60: "#005FA3",
      70: "#0066BD",
      80: "#00498A",
      90: "#013360",
      100: "#061727",
    },
  },
  {
    title: "Magenta",
    subtitle: "Default",
    colors: {
      10: "#FFF0F7",
      20: "#FFD6E8",
      30: "#FFAFD2",
      40: "#FF7EB6",
      50: "#EE5396",
      60: "#D02670",
      70: "#9F1853",
      80: "#740937",
      90: "#510224",
      100: "#2A0A18",
    },
  },
  {
    title: "Magenta",
    subtitle: "Hover",
    colors: {
      10: "#FFE0EF",
      20: "#FFBDDA",
      30: "#FF94C3",
      40: "#FF57A0",
      50: "#E3176F",
      60: "#B0215F",
      70: "#BF1D63",
      80: "#8E0B43",
      90: "#68032E",
      100: "#2A0A18",
    },
  },
  {
    title: "Purple",
    subtitle: "Default",
    colors: {
      10: "#F6F2FF",
      20: "#E8DAFF",
      30: "#D4BBFF",
      40: "#BE95FF",
      50: "#A56EFF",
      60: "#8A3FFC",
      70: "#6929C4",
      80: "#491D8B",
      90: "#31135E",
      100: "#1C0F30",
    },
  },
  {
    title: "Purple",
    subtitle: "Hover",
    colors: {
      10: "#EDE5FF",
      20: "#DCC7FF",
      30: "#C5A3FF",
      40: "#AE7AFF",
      50: "#9352FF",
      60: "#7822FB",
      70: "#7C3DD6",
      80: "#5B24AD",
      90: "#40197B",
      100: "#1C0F30",
    },
  },
  {
    title: "Teal",
    subtitle: "Default",
    colors: {
      10: "#D9FBFB",
      20: "#9EF0F0",
      30: "#3DDBD9",
      40: "#08BDBA",
      50: "#009D9A",
      60: "#007D79",
      70: "#005D5D",
      80: "#004144",
      90: "#022B30",
      100: "#081A1C",
    },
  },
  {
    title: "Teal",
    subtitle: "Hover",
    colors: {
      10: "#ACF6F6",
      20: "#57E5E5",
      30: "#25CAC8",
      40: "#07ABA9",
      50: "#008A87",
      60: "#006B68",
      70: "#007070",
      80: "#005357",
      90: "#033940",
      100: "#0F3034",
    },
  },
  {
    title: "Tint",
    subtitle: "Default",
    colors: {
      Blue: "#EDF5FF",
      Cyan: "#E5F6FF",
      Green: "#DEFBE6",
      Magenta: "#FFF0F7",
      Orange: "#FFF2E8",
      Purple: "#F6F2FF",
      Red: "#FFF1F1",
      Teal: "#D9FBFB",
      Yellow: "#FCF4D6",
    },
  },
  {
    title: "Tint",
    subtitle: "Hover",
    colors: {
      Blue: "#B8D3FF",
      Cyan: "#99DAFF",
      Green: "#74E792",
      Magenta: "#FFBDDA",
      Orange: "#FFC69E",
      Purple: "#DCC7FF",
      Red: "#FFC2C5",
      Teal: "#57E5E5",
      Yellow: "#FDDC69",
    },
  },
];

const ColorItemList: React.FC = () => (
  <div>
    {colorItems.map((item, index) => (
      <ColorItem
        key={index}
        title={item.title}
        subtitle={item.subtitle}
        colors={item.colors}
      />
    ))}
  </div>
);

export default ColorItemList;