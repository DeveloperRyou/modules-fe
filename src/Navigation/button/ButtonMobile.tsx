import React, { cloneElement, useEffect, useState } from "react";
import Divider from "src/divider/Divider";
import Icon, { iconKey } from "src/icon/Icon";

export interface ButtonPropsMobile {
  size: "L" | "M";
  style:
    | "primary"
    | "secondary"
    | "border"
    | "ghost"
    | "danger_primary"
    | "danger_border"
    | "danger_ghost"
    | "elevated_primiary";
  type: "text" | "text-text" | "icon" | "icon-left" | "icon-right";
  state: "enabled" | "active" | "disabled";
  round?: boolean;
  text1: string;
  text2?: string;
  iconKey: iconKey;
  onClick?: () => void;
}

export const buttonSize = {
  iconOnly: {
    L: "w-full min-w-[64px] max-w-[343px] h-[64px] p-spacing-05 gap-spacing-04 flex justify-center items-center",
    M: "w-full min-w-[32px] max-w-[343px] h-[40px] p-spacing-04 gap-spacing-02 flex justify-center items-center",
  },
  withText: {
    L: "w-full min-w-[64px] max-w-[343px] h-[64px] py-spacing-05 px-spacing-07 gap-spacing-04 flex justify-center items-center",
    M: "w-full min-w-[32px] max-w-[343px] h-[40px] px-spacing-04 py-spacing-03 gap-spacing-02 flex justify-center items-center",
  },
};

export const buttonLabel = {
  L: "label-03-bold",
  M: "label-02-bold",
};

export const buttonStyleMobile = {
  primary: {
    enabled: "bg-button-primary text-text-on-color",
    hover: "bg-button-primary-hover text-text-on-color",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-primary-active text-text-on-color m-[-1px]",
  },
  secondary: {
    enabled: "bg-button-secondary text-text-secondary",
    hover: "bg-button-secondary-hover text-text-secondary",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-secondary text-text-secondary m-[-1px]",
  },
  danger_primary: {
    enabled: "bg-button-danger text-text-on-color",
    hover: "bg-button-danger-hover text-text-on-color hover",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-danger text-text-on-color m-[-1px]",
  },
  danger_border: {
    enabled: "border border-button-danger text-text-error m-[-1px]",
    hover:
      "border border-strong-selected-01 bg-button-danger-hover text-text-on-color-hover m-[-1px]",
    disabled: "border border-disabled text-text-disabled m-[-1px]",
    active:
      "border border-border-strong-selected-01 bg-button-danger text-text-on-color m-[-1px]",
  },
  danger_ghost: {
    enabled: "text-text-error",
    hover: "bg-background-hover text-text-error",
    disabled: "text-text-disabled",
    active: "border border-border-error text-text-error m-[-1px]",
  },
  border: {
    enabled: "border border-button-border text-text-secondary m-[-1px]",
    hover:
      "border border-button-border-hover bg-button-primary-hover text-text-on-color-hover m-[-1px]",
    disabled: "border border-border-disabled text-text-disabled m-[-1px]",
    active:
      "border border-border-strong-selected-01 bg-button-primary text-text-on-color m-[-1px]",
  },

  ghost: {
    enabled: "text-text-primary",
    hover: "bg-text-Gray-50",
    disabled: "text-text-disabled",
    active: "border-2 border-Gray-90 text-text-primary m-[-2px]",
  },

  elevated_primiary: {
    enabled: "bg-button-primary text-text-on-color shadow-elevation-light-1",
    hover:
      "bg-button-primary-hover text-text-on-color shadow-elevation-light-1",
    disabled:
      "bg-button-disabled text-text-on-color-disabled shadow-elevation-light-1",
    active: "bg-button-primary text-text-on-color shadow-elevation-light-1",
  },
};

const buttonIconColors = {
  primary: {
    enabled: "fill-text-on-color",
    hover: "fill-text-on-color-hover",
    focus: "fill-text-on-color active",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-on-color",
  },
  secondary: {
    enabled: "fill-text-secondary",
    hover: "fill-text-secondary",
    focus: "fill-text-secondary",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-secondary",
  },
  danger_primary: {
    enabled: "fill-text-on-color",
    hover: "fill-text-on-color hover",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-on-color",
  },
  danger_border: {
    enabled: "fill-text-error",
    hover: "fill-text-on-color-hover",
    disabled: "fill-text-disabled",
    active: "fill-text-on-color",
  },
  danger_ghost: {
    enabled: "fill-text-error",
    hover: "fill-text-error",
    disabled: "fill-text-disabled",
    active: "fill-text-error",
  },
  border: {
    enabled: "fill-text-secondary",
    hover: "fill-text-on-color-hover",
    focus: "fill-text-on-color active",
    disabled: "fill-text-disabled",
    active: "fill-text-on-color",
  },
  ghost: {
    enabled: "fill-text-primary",
    hover: "fill-text-primary",
    focus: "fill-text-primary",
    disabled: "fill-text-disabled",
    active: "fill-text-primary",
  },
  elevated_primiary: {
    enabled: "fill-text-on-color",
    hover: "fill-text-on-color",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-on-color",
  },
};

const borderColors = {
  primary: {
    enabled: "#8D8D80",
    active: "#8D8D80",
    disabled: "#8D8D8D",
  },
  secondary: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#8D8D8D",
  },
  border: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#C6C6C6",
  },
  ghost: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#C6C6C6",
  },
  danger_primary: {
    enabled: "#E0E0E0",
    active: "#E0E0E0",
    disabled: "#E0E0E0",
  },
  danger_border: {
    enabled: "#DA1E28",
    active: "#E0E0E0",
    disabled: "#C6C6C6",
  },
  danger_ghost: {
    enabled: "#E0E0E0",
    active: "#E0E0E0",
    disabled: "#C6C6C6",
  },
  elevated_primiary: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#8D8D8D",
  },
};

export default function Button({
  size = "L",
  style = "primary",
  type = "text",
  state = "enabled",
  round = false,
  text1 = "Text1",
  text2 = "Text2",
  iconKey,
  onClick,
}: ButtonPropsMobile) {
  const [buttonState, setButtonState] = useState(state);

  useEffect(() => {
    setButtonState(state);
  }, [state]);

  const handleMouseDown = () => {
    if (buttonState === "enabled") {
      setButtonState("active");
    }
  };

  const handleMouseUp = () => {
    if (buttonState === "active") {
      setButtonState("enabled");
    }
  };

  const buttonType = type === "icon" ? "iconOnly" : "withText";
  const sizeClass = buttonSize[buttonType][size];
  const labelClass = buttonLabel[size];
  const styleClass = buttonStyleMobile[style][buttonState];
  const roundClass =
    style === "ghost" && buttonState === "active"
      ? ""
      : round
        ? "rounded-radius-circle"
        : "rounded-radius-04";
  const borderColor = borderColors[style][buttonState];
  const iconColor = buttonIconColors[style][buttonState];

  return (
    <button
      className={`button flex ${labelClass} ${sizeClass} ${styleClass} ${roundClass}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      disabled={buttonState === "disabled"}
    >
      {type === "icon-left" && (
        <span className="left-icon">
          <Icon icon={iconKey} className={`${iconColor}`} />
        </span>
      )}
      {type === "icon-left" && <span>{text1}</span>}
      {type === "icon-right" && <span>{text1}</span>}
      {type === "icon-right" && (
        <span className="right-icon">
          <Icon icon={iconKey} className={`${iconColor}`} />
        </span>
      )}
      {type === "text" && <span>{text1}</span>}
      {type === "text-text" && <span>{text1}</span>}
      {type === "text-text" && (
        <Divider
          type="Vertical"
          height={16}
          subheader="|"
          borderColor={borderColor}
        />
      )}
      {type === "text-text" && <span>{text2}</span>}
      {type === "icon" && (
        <span className="icon">
          <Icon icon={iconKey} className={`${iconColor}`} />
        </span>
      )}
    </button>
  );
}
