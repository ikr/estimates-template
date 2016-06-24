import React from 'react';
import StoryNarrative from './StoryNarrative';
import StoryTasks from './StoryTasks';
import estimateTasks from './estimateTasks';

function Story({displayTasks, tasks, active, narrative, onToggleTasks, onChangeActivity}) {
    const tasksToggleTitle = (displayTasks ? 'Hide tasks' : 'Show tasks');
    const elTasks = (displayTasks ? <StoryTasks tasks={tasks}/> : null);
    const estimation = estimateTasks(tasks);
    const estimationTextStyle = (active ? 'bg-success' : 'text-muted');

    return (
        <div>
            <StoryNarrative markdown={narrative}/>
            {elTasks}

            <div className='row'>
                <div className='col-md-2'>
                    <button className='btn btn-default' onClick={onToggleTasks}>
                        {tasksToggleTitle}
                    </button>
                </div>

                <div className='checkbox col-md-2'>
                    <label>
                        <input type='checkbox' checked={active} onChange={onChangeActivity}/>
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
}

Story.propTypes = {
    displayTasks: React.PropTypes.bool.isRequired,
    active: React.PropTypes.bool.isRequired,
    narrative: React.PropTypes.string.isRequired,
    tasks: React.PropTypes.array.isRequired,
    onToggleTasks: React.PropTypes.func.isRequired,
    onChangeActivity: React.PropTypes.func.isRequired
};

export default Story;
