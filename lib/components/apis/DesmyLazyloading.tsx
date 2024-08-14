import React, { lazy, Suspense, ComponentType, ReactNode } from "react";

type DesmyLazyloadingProps = {
  fallback?: ReactNode;
};

const DesmyLazyloading = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  { fallback = null }: DesmyLazyloadingProps = {}
): React.FC<P & JSX.IntrinsicAttributes & React.PropsWithRef<P>> => {
  const LazyComponent = lazy(importFunc);

  const DesmyLazyloadingComponent: React.FC< P & JSX.IntrinsicAttributes & React.PropsWithRef<P>> = (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return DesmyLazyloadingComponent;
};

export  {DesmyLazyloading};
