import { useEffect, useState } from "react";
import { FlexBox } from "src/layout";

export interface MenuItemProps {
  size: "L" | "M";
  state: "enabled" | "hover" | "error" | "disabled";
  style: "simple" | "complex";
  type: "default" | "icon-left" | "icon-right";
  text?: string;
  className?: string;
}

const MenuItemState = {
  enabled: "bg-layer-01 text-text-primary",
  hover: "bg-layer-01-hover text-text-primary",
  error: "bg-support-error text-text-on-color",
  disabled: "bg-layer-01 text-text-disabled",
};

const MenuItemStyle = {
  simple: {
    L: "w-40 h-12 p-spacing-04 gap-spacing-02",
    M: "w-40 h-10 pt-spacing-03 pr-spacing-04 pb-spacing-03 pl-spacing-04 gap-spacing-02",
  },
  complex: {
    L: "w-40 h-[52px] p-spacing-04 gap-spacing-02",
    M: "w-40 h-[44px] pt-spacing-03 pr-spacing-04 pb-spacing-03 pl-spacing-04 gap-spacing-02",
  },
};

const FruitApple = (
  <svg
    width="current"
    height="current"
    viewBox="0 0 24 24"
    fill="current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.25 2.75C6.25 2.33579 6.58579 2 7 2H8.5C10.5711 2 12.25 3.67893 12.25 5.75V6.55589L14.4306 4.01191C14.7001 3.69741 15.1736 3.66099 15.4881 3.93056C15.8026 4.20012 15.839 4.6736 15.5694 4.98809L13.3319 7.59852C13.5412 7.54933 13.7369 7.49126 13.9454 7.4294L14.043 7.4005C14.7851 7.16401 15.5559 7.02928 16.3342 7C19.7775 7 21 10.2325 21 13C21 18.6325 17.9475 21.9993 15 22C14.3562 21.9659 13.7238 21.816 13.1332 21.5575C12.7739 21.3964 12.3915 21.2927 12 21.25C11.6092 21.2927 11.2276 21.3965 10.869 21.5575C10.2781 21.816 9.64553 21.9659 9.0015 22H9C6.051 21.9993 3 18.6325 3 13C3 9.52715 4.52527 7.28905 7.01947 7.02605C6.53677 6.3949 6.25 5.60594 6.25 4.75V2.75ZM7.75 3.5V4.75C7.75 5.99264 8.75736 7 10 7H10.75V5.75C10.75 4.50736 9.74264 3.5 8.5 3.5H7.75ZM15 20.5C14.5361 20.4605 14.0822 20.3429 13.6575 20.152C13.1333 19.9204 12.572 19.7843 12 19.75C11.429 19.7844 10.8687 19.9205 10.3455 20.152C9.91975 20.3428 9.46487 20.4604 9 20.5C6.78796 20.498 4.5 17.6932 4.5 13C4.5 11.647 4.79475 8.5 7.524 8.5C8.2059 8.53637 8.88085 8.6555 9.534 8.85475C10.278 9.07725 11.046 9.20994 11.8215 9.25H12.1898C12.953 9.21359 13.7083 9.07847 14.4368 8.848C15.0513 8.64954 15.6893 8.53254 16.3342 8.5C19.347 8.5 19.5 12.2485 19.5 13C19.5 17.6943 17.211 20.4993 15 20.5Z"
      fill="current"
    />
  </svg>
);

export default function MenuItem({
  size,
  state,
  style,
  type,
  text = "Menu Item",
  className,
}: MenuItemProps) {
  const stateClass = MenuItemState[state];
  const styleClass = MenuItemStyle[style][size];

  return (
    <FlexBox
      direction="row"
      className={`flex justify-between ${stateClass} ${styleClass} ${className}`}
    >
      {type === "icon-left" && <span className="w-5 h-5">{FruitApple}</span>}
      <p>{text}</p>
      {type === "icon-right" && <span className="w-5 h-5">{FruitApple}</span>}
    </FlexBox>
  );
}