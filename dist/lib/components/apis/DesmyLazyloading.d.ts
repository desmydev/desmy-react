import { default as React, ComponentType, ReactNode } from 'react';

type DesmyLazyloadingProps = {
    fallback?: ReactNode;
};
declare const DesmyLazyloading: <P extends object>(importFunc: () => Promise<{
    default: ComponentType<P>;
}>, { fallback }?: DesmyLazyloadingProps) => React.FC<P & JSX.IntrinsicAttributes & React.PropsWithRef<P>>;
export { DesmyLazyloading };
