import React from 'react';
import estimateTasks  from './estimateTasks';

class StoriesTotal extends React.Component {
    render() {
        const estimation = estimateTasks(this.props.allTasks);

        return (
            <p className="lead">
                Grand total: 75%-likely doable within {estimation} h
            </p>
        );
    }
}

export default StoriesTotal;
