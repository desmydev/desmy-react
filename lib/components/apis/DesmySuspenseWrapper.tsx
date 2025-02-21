import React, { Component, Suspense, ReactNode } from "react";

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

class DesmySuspenseWrapper extends Component<SuspenseWrapperProps> {
  render() {
    const { children, fallback } = this.props;
    
    return <Suspense fallback={fallback ?? <div></div>}>{children}</Suspense>;
  }
}

export {DesmySuspenseWrapper};
