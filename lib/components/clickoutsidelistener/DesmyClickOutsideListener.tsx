import React, { Component, createRef, RefObject } from "react";

interface Props {
  onClickOutside: () => void;
  children: React.ReactNode;
}

export class DesmyClickOutsideListener extends Component<Props> {
  private containerRef: RefObject<HTMLDivElement | null>; // Allow null explicitly

  constructor(props: Props) {
    super(props);
    this.containerRef = createRef<HTMLDivElement>(); // No TypeScript error
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("touchstart", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("touchstart", this.handleClickOutside);
  }

  handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const container = this.containerRef.current;
    if (!container) return; // Ensure the ref is not null before using

    if (!container.contains(event.target as Node)) {
      this.props.onClickOutside();
    }
  };

  render() {
    return <div ref={this.containerRef}>{this.props.children}</div>;
  }
}
