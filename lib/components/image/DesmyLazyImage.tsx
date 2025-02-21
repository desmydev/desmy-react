import React, { Component, createRef, ReactNode } from "react";

interface DesmyLazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: ReactNode;
  coverClassName?: string;
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
    }
  };

  handleImageLoad = () => {
    this.setState({ isLoaded: true });
    this.observer?.disconnect();
  };

  render() {
    const { src, placeholder, alt, coverClassName, className, ...rest } = this.props;
    const { isLoaded } = this.state;

    const placeholderImage =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="; // 1x1 transparent image

    if (!src) {
      return null; // Ensure src is always defined
    }

    return (
      <div className={`relative ${coverClassName ?? ""}`}>
        {!isLoaded && placeholder}
        <img
          ref={this.imgRef}
          src={isLoaded ? src : placeholderImage}
          alt={alt}
          className={`${className ?? "h-12"} transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={this.handleImageLoad}
          {...rest}
        />
      </div>
    );
  }
}

// Explicitly define default export
export default DesmyLazyImage;
export { DesmyLazyImage };
