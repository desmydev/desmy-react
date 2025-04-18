import React from 'react';
import DesmyCommons from './DesmyCommons';

type Props = {
    timestamp: string | number | Date;
    className?: string;
};

type State = {
    timeAgo: string;
};

class DesmyTimeAgo extends React.Component<Props, State> {
    intervalId: number | null = null;

    constructor(props: Props) {
        super(props);
        this.state = {
            timeAgo: DesmyCommons.getTimeAgoAndCustomDate(this.props.timestamp),
        };
    }

    componentDidMount() {
        this.startInterval();
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.timestamp !== this.props.timestamp) {
            this.setState({
                timeAgo: DesmyCommons.getTimeAgoAndCustomDate(this.props.timestamp),
            });
            this.clearInterval();
            this.startInterval();
        }
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    startInterval() {
        this.intervalId = window.setInterval(() => {
            this.setState({
                timeAgo: DesmyCommons.getTimeAgoAndCustomDate(this.props.timestamp),
            });
        }, 10000); // every 10 seconds
    }

    clearInterval() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    render() {
        const { className } = this.props;

        return <span className={className}>{this.state.timeAgo}</span>;
    }
}

export { DesmyTimeAgo };
