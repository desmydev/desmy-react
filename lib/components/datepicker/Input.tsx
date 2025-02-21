import React, { forwardRef } from "react";
import { DesmyTextInput } from "../input/DesmyTextInput";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label: string;
  displayFormat?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ value, displayFormat, label, ...props }, ref) => {
  return (
    <DesmyTextInput
      defaultValue={value || ""}
      onRef={(instance) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(instance);
          } else if ("current" in ref) {
            (ref as React.RefObject<HTMLInputElement | null>).current = instance;
          }
        }
      }}
      label={label}
      readOnly={true}
      onChange={() => {}}
    />
  );
});

export default Input;
