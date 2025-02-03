import { ReactElement, HTMLAttributes, FunctionComponent } from 'react';
type FocusEvents = 'focusin' | 'focusout';
type MouseEvents = 'click' | 'mousedown' | 'mouseup';
type TouchEvents = 'touchstart' | 'touchend';
type Events = FocusEvent | MouseEvent | TouchEvent;
interface Props extends HTMLAttributes<HTMLElement> {
    onClickOutside: (event: Events) => void;
    focusEvent?: FocusEvents;
    mouseEvent?: MouseEvents;
    touchEvent?: TouchEvents;
    children: ReactElement<any>;
}
declare const DesmyClickOutsideListener: FunctionComponent<Props>;
export { DesmyClickOutsideListener };
