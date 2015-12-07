import React from 'react';
import StoryNarrative from './StoryNarrative';
import StoryTasks from './StoryTasks';
import estimateTasks from './estimateTasks';

export default props => {
    const tasksToggleTitle = (props.displayTasks ? 'Hide tasks' : 'Show tasks');
    const elTasks = (props.displayTasks ? <StoryTasks tasks={props.tasks}/> : null);
    const estimation = estimateTasks(props.tasks);
    const estimationTextStyle = (props.active ? 'bg-success' : 'text-muted');

    /* eslint no-script-url: 0 */

    return (
        <div>
            <StoryNarrative markdown={props.narrative}/>
            {elTasks}

            <div className='row'>
                <div className='col-md-2'>
                    <a
                    className='btn btn-default'
                    href='javascript:;'
                    onClick={props.onToggleTasks}>
                        {tasksToggleTitle}
                    </a>
                </div>

                <div className='checkbox col-md-2'>
                    <label>
                        <input
                            type='checkbox'
                            checked={props.active}
                            onChange={props.onChangeActivity}/>

                        Include into total estimation
                    </label>
                </div>

                <div className='col-md-3'>
                    <p className={estimationTextStyle}>
                        75%-likely doable within {estimation} h
                    </p>
                </div>
            </div>
        </div>
    );
};
