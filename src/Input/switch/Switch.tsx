// radius 적용 안됨

import { useState } from "react";

export interface SwitchProps {
  state: "Enabled" | "Disabled" | "ReadOnly";
  title?: boolean;
  titleText?: string;
  label?: boolean;
  labelText?: string;
}

const stateStyles = (isOn: boolean) => ({
  Enabled: {
    iconColor: "bg-icon-on-color",
    bgColor: isOn ? "bg-support-info" : "bg-button-disabled",
  },
  Disabled: {
    iconColor: "bg-icon-on-color-disabled",
    bgColor: "bg-button-disabled",
  },
  ReadOnly: {
    iconColor: "bg-icon-primary",
    bgColor: "bg-layer-transparent",
  },
});

export default function Switch({
  state,
  title = false,
  titleText,
  label = false,
  labelText,
}: SwitchProps) {
  const [isOn, setIsOn] = useState(false);

  const stateStyle = stateStyles(isOn)[state];

  const labelColor =
    state === "Disabled" ? "text-text-disabled" : "text-text-secondary";

  const titleColor =
    state === "Disabled" ? "text-text-disabled" : "text-text-primary";

  const toggleSwitch = () => {
    if (state == "Enabled") {
      setIsOn(!isOn);
    }
  };

  return (
    <>
      {label && (
        <div className={`pb-spacing-02 label-01-regular ${labelColor}`}>
          {labelText}
        </div>
      )}
      <div className="flex gap-spacing-02">
        <div
          className={`w-12 h-6 rounded-full py-[3px]
            ${stateStyle.bgColor} ${
            state === "ReadOnly" ? "border border-border-subtle-01" : ""
          }`}
          onClick={toggleSwitch}
        >
          <div
            className={`w-[18px] h-[18px] rounded-full ${stateStyle.iconColor} 
                transform transition-transform duration-250 ${
                  isOn ? "translate-x-[27px]" : "translate-x-[3px]"
                }`} // motion 적용 안됨
          />
        </div>
        {title && (
          <div className={`pt-1 body-02-regular ${titleColor}`}>
            {titleText}
          </div>
        )}
      </div>
    </>
  );
}