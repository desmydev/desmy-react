import React, { Component, createRef, ReactNode } from "react";
import ReactDOM from "react-dom";

interface DropdownPositionWrapperProps {
  targetRef: React.RefObject<HTMLElement | null>;
  children: ReactNode;
  maxHeight?: number;
  visible: boolean;
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void; // Added onScroll prop
}

interface DropdownPositionWrapperState {
  styles: React.CSSProperties;
}

export class DropdownPositionWrapper extends Component<
  DropdownPositionWrapperProps,
  DropdownPositionWrapperState
> {
  wrapperRef = createRef<HTMLDivElement>();

  constructor(props: DropdownPositionWrapperProps) {
    super(props);
    this.state = { styles: {} };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePosition);
    window.addEventListener("scroll", this.updatePosition, true);
    this.updatePosition();
  }

  componentDidUpdate(prevProps: DropdownPositionWrapperProps) {
    if (
      prevProps.visible !== this.props.visible &&
      this.props.visible
    ) {
      this.updatePosition();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePosition);
    window.removeEventListener("scroll", this.updatePosition, true);
  }

  updatePosition = () => {
    const { targetRef, maxHeight = 350 } = this.props;
    const target = targetRef.current;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;

    const stylePosition: React.CSSProperties = {};
    let maxH = maxHeight;

    const padding = 5; // 5px gap

    if (spaceBelow < maxHeight && spaceAbove > spaceBelow) {
      // open upward
      stylePosition.bottom = viewportHeight - rect.top + padding; // add 5px gap above
      maxH = spaceAbove > maxHeight ? maxHeight : spaceAbove;
    } else {
      // open downward
      stylePosition.top = rect.bottom + padding; // add 5px gap below
      maxH = spaceBelow > maxHeight ? maxHeight : spaceBelow;
    }

    const styles: React.CSSProperties = {
      position: "fixed",
      left: rect.left,
      width: rect.width,
      maxHeight: maxH,
      overflowY: "auto",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      fontFamily: "inherit",
      zIndex: 2147483647,
      ...stylePosition,
    };

  this.setState({ styles });
};

  render() {
    const { visible, children, onScroll } = this.props;
    const { styles } = this.state;

    if (!visible) return null;

    return ReactDOM.createPortal(
      <div
        ref={this.wrapperRef}
        style={styles}
        tabIndex={-1}
        onScroll={onScroll}
      >
        {children}
      </div>,
      document.body
    );
  }
}
