import React, { Component, createRef, ReactNode } from "react";
import ReactDOM from "react-dom";

interface DropdownPositionWrapperProps {
  targetRef: React.RefObject<HTMLElement | null>;
  children: ReactNode;
  maxHeight?: number;
  visible: boolean;
  viewType?: "full" | "auto";
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
  fadeDurationMs?: number;
  onClose?: () => void; // new prop for close button
}

interface DropdownPositionWrapperState {
  styles: React.CSSProperties;
  isVisible: boolean;
  isActive: boolean;
}

export class DropdownPositionWrapper extends Component<
  DropdownPositionWrapperProps,
  DropdownPositionWrapperState
> {
  wrapperRef = createRef<HTMLDivElement>();
  fadeTimeout?: number;

  static defaultProps = {
    fadeDurationMs: 200,
  };

  constructor(props: DropdownPositionWrapperProps) {
    super(props);
    this.state = {
      styles: {},
      isVisible: props.visible,
      isActive: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePosition);
    window.addEventListener("scroll", this.updatePosition, true);

    if (this.state.isVisible) {
      setTimeout(() => this.setState({ isActive: true }), 10);
      this.updatePosition();
    }
  }

  componentDidUpdate(prevProps: DropdownPositionWrapperProps) {
    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        this.setState({ isVisible: true }, () => {
          this.updatePosition();
          setTimeout(() => this.setState({ isActive: true }), 10);
        });
      } else {
        this.setState({ isActive: false });
        if (this.fadeTimeout) clearTimeout(this.fadeTimeout);
        this.fadeTimeout = window.setTimeout(() => {
          this.setState({ isVisible: false });
        }, this.props.fadeDurationMs);
      }
    }

    if (
      (prevProps.visible !== this.props.visible && this.props.visible) ||
      (prevProps.viewType !== this.props.viewType && this.props.visible)
    ) {
      this.updatePosition();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePosition);
    window.removeEventListener("scroll", this.updatePosition, true);
    if (this.fadeTimeout) clearTimeout(this.fadeTimeout);
  }

 updatePosition = () => {
  const { targetRef, maxHeight = 350, viewType = "auto" } = this.props;
  const target = targetRef.current;
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const isSmallScreen = viewportWidth <= 480;
  const padding = 5;

  const stylePosition: React.CSSProperties = {};
  let maxH = maxHeight;

  if (viewType === "full" && isSmallScreen) {
    maxH = viewportHeight;
    stylePosition.top = 0;
  } else {
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow < maxHeight && spaceAbove > spaceBelow) {
      stylePosition.bottom = viewportHeight - rect.top + padding;
      maxH = spaceAbove > maxHeight ? maxHeight : spaceAbove;
    } else {
      stylePosition.top = rect.bottom + padding;
      maxH = spaceBelow > maxHeight ? maxHeight : spaceBelow;
    }
  }

  let left = rect.left;
  let width = rect.width;

  if (viewType === "full") {
    width = viewportWidth;
    const inputCenter = rect.left + rect.width / 2;
    left = inputCenter - width / 2;
    if (left < 0) left = 0;
    if (left + width > viewportWidth) left = viewportWidth - width;
  } else {
    // Enforce minWidth of 400px here when NOT full mode
    width = Math.max(400, rect.width);
    // Optionally adjust left if width overflows viewport
    if (left + width > viewportWidth) {
      left = viewportWidth - width;
      if (left < 0) left = 0;
    }
  }

  const styles: React.CSSProperties = {
    position: "fixed",
    left,
    width,
    minWidth: 400,  // Add minWidth here
    maxHeight: maxH,
    overflowY: "auto",
    fontFamily: "inherit",
    zIndex: 2147483647,
    ...stylePosition,
  };

  this.setState({ styles });
};


  render() {
    const {
      children,
      onScroll,
      fadeDurationMs = 100,
      viewType = "auto",
      onClose,
    } = this.props;
    const { styles, isVisible, isActive } = this.state;

    if (!isVisible) return null;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const isSmallScreen = viewportWidth <= 480;

    // Determine if we are in the full + small screen mode where maxHeight = viewportHeight
    const isFullSmallMode =
      viewType === "full" && isSmallScreen && styles.maxHeight === viewportHeight;

    const fadeStyles: React.CSSProperties = {
      opacity: isActive ? 1 : 0,
      transition: `opacity ${fadeDurationMs}ms ease, transform ${fadeDurationMs}ms ease`,
      pointerEvents: isActive ? "auto" : "none",
      ...styles,
    };

    if (isFullSmallMode) {
      fadeStyles.top = 0;
      fadeStyles.height = viewportHeight;
      fadeStyles.display = "flex";
      fadeStyles.justifyContent = "center";
      fadeStyles.alignItems = "center";
      fadeStyles.transform = isActive ? "translateY(0)" : "translateY(-10px)";
      fadeStyles.flexDirection = "column";
      fadeStyles.position = "fixed";
      fadeStyles.left = 0;
      fadeStyles.width = "100%";
    } else {
      fadeStyles.transform = isActive ? "translateY(0)" : "translateY(-10px)";
    }

    return ReactDOM.createPortal(
      <div
        ref={this.wrapperRef}
        style={fadeStyles}
        tabIndex={-1}
        onScroll={onScroll}
      >
        {isFullSmallMode && onClose && (
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2147483648,
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "4px",
              color: "white",
              padding: "6px 10px",
              cursor: "pointer",
              fontSize: 16,
            }}
            aria-label="Close dropdown"
            type="button"
          >
            ×
          </button>
        )}
        {children}
      </div>,
      document.body
    );
  }
}
