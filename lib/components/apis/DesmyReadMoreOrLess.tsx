import { Component } from "react";

interface ReadMoreOrLessProps {
  text: string;
  maxLength?: number;
}

interface ReadMoreOrLessState {
  isExpanded: boolean;
}

class DesmyReadMoreOrLess extends Component<ReadMoreOrLessProps, ReadMoreOrLessState> {
  static defaultProps = {
    maxLength: 100,
  };

  constructor(props: ReadMoreOrLessProps) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  toggleReadMore = () => {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    const { text, maxLength } = this.props;
    const { isExpanded } = this.state;

    const displayText = isExpanded || text.length <= maxLength! ? text : `${text.substring(0, maxLength!)}...`;

    return (
      <div>
        {displayText}
        {text.length > maxLength! && (
          <span onClick={this.toggleReadMore} className="text-blue-500 dark:text-white font-black underline">
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        )}
      </div>
    );
  }
}

export {DesmyReadMoreOrLess};