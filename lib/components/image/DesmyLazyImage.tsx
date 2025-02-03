import React, { Component, createRef, ReactNode } from "react";

interface DesmyLazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: ReactNode;
  coverClassName?:string
}

interface DesmyLazyImageState {
  isLoaded: boolean;
}

class DesmyLazyImage extends Component<DesmyLazyImageProps, DesmyLazyImageState> {
  private imgRef = createRef<HTMLImageElement>();
  private observer: IntersectionObserver | null = null;

  constructor(props: DesmyLazyImageProps) {
    super(props);
    this.state = { isLoaded: false };
  }

  componentDidMount() {
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadImage();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (this.imgRef.current) {
        this.observer.observe(this.imgRef.current);
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadImage();
    }
  }

  componentWillUnmount() {
    this.observer?.disconnect();
  }

  loadImage = () => {
    if (!this.state.isLoaded) {
      this.setState({ isLoaded: true });
      this.observer?.disconnect();
    }
  };

  render() {
    const { src, placeholder, alt,coverClassName, className, ...rest } = this.props;
    const { isLoaded } = this.state;

    if (!src) {
      // Do not render anything if src is not provided
      return null;
    }

    return (
      <div className={`${coverClassName ?? `w-full`}`} style={{ position: "relative", display: "inline-block" }}>
        {!isLoaded && placeholder && (
          <div
            className="desmy-placeholder"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {placeholder}
          </div>
        )}
        <img
          ref={this.imgRef}
          src={isLoaded ? src : undefined}
          alt={alt}
          className={`desmy-lazy-image ${className ?? ""} ${isLoaded ? "loaded" : "loading"}`}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          onLoad={this.loadImage}
          {...rest}
        />
      </div>
    );
  }
}

// Explicitly define default export
export default DesmyLazyImage;
export { DesmyLazyImage };
