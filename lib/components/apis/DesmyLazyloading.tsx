import React, { lazy, ComponentType } from "react";


const DesmyLazyloading = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>
):React.LazyExoticComponent<ComponentType<P>>=> {
  const LazyComponent = lazy(importFunc);
  return LazyComponent;
};

export { DesmyLazyloading };
