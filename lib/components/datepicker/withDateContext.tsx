import React, { Component } from "react";
import { DateContext, DateContextProps } from "./DateContext";  // Import DateContextProps here

// Define a HOC that injects the context values into a class component
export function withDateContext<P extends { dateContext: DateContextProps }>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<Omit<P, 'dateContext'>> {
    render() {
      return (
        <DateContext.Consumer>
          {(context) => {
            if (!context) {
              throw new Error("DateContext is not available");
            }

            return <WrappedComponent {...(this.props as P)} dateContext={context} />;
          }}
        </DateContext.Consumer>
      );
    }
  };
}
