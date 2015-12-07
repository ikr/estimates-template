import React from 'react';
import estimateTasks from './estimateTasks';

export default ({allTasks}) => (
    <p className='lead'>
        Grand total: 75%-likely doable within {estimateTasks(allTasks)} h
    </p>
);
