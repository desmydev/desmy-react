import React from "react";
import { DateProvider } from "./DateContext";
import DatePickerProvider from "./DatePickerProvider";

import {DatePickerProps} from '../apis/SharedProps'


const DesmyDatePicker: React.FC<DatePickerProps> = ({ ...props}) => {
  return (
    <DateProvider >
      <DatePickerProvider {...props}/>
    </DateProvider>
  );
};

export {DesmyDatePicker};
