import React from 'react';
import estimateTasks from './estimateTasks';

function StoriesTotal({allTasks}) {
    return (
        <p className='lead'>
            Grand total: 75%-likely doable within {estimateTasks(allTasks)} h
        </p>
    );
}

StoriesTotal.propTypes = {allTasks: React.PropTypes.array.isRequired};

export default StoriesTotal;
