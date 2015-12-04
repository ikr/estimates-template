import React          from 'react';
import StoryNarrative from './StoryNarrative';
import StoryTasks     from './StoryTasks';
import estimateTasks  from './estimateTasks';

class Story extends React.Component {
    render() {
        const tasksToggleTitle = (this.props.displayTasks ? 'Hide tasks' : 'Show tasks'),
              elTasks = (this.props.displayTasks? <StoryTasks tasks={this.props.tasks}/> : null),
              estimation = estimateTasks(this.props.tasks),
              estimationTextStyle = (this.props.active ? 'bg-success' : 'text-muted');

        return (
            <div>
                <StoryNarrative markdown={this.props.narrative}/>
                {elTasks}

                <div className="row">
                    <div className="col-md-2">
                        <a
                        className="btn btn-default"
                        href="javascript:;"
                        onClick={this.props.onToggleTasks}>
                            {tasksToggleTitle}
                        </a>
                    </div>

                    <div className="checkbox col-md-2">
                        <label>
                            <input
                            type="checkbox"
                            checked={this.props.active}
                            onChange={this.props.onChangeActivity}>
                                Include into total estimation
                            </input>
                        </label>
                    </div>

                    <div className="col-md-3">
                        <p className={estimationTextStyle}>
                            75%-likely doable within {estimation} h
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Story;
