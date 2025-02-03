import { default as React, ComponentType } from 'react';
declare const DesmyLazyloading: <P extends object>(importFunc: () => Promise<{
    default: ComponentType<P>;
}>) => React.LazyExoticComponent<ComponentType<P>>;
export { DesmyLazyloading };
