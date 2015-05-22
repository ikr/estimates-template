import React from 'react';

const title = (task) => {
    return task[0];
};

const bestCaseHours = (task) => {
    return task[1];
};

const worstCaseHours = (task) => {
    return task[2];
};

class StoryTasks extends React.Component {
    render() {
        const row = (task, index) => {
            return (
                <tr key={'k' + index}>
                    <td>{title(task)}</td>
                    <td>{bestCaseHours(task)}-{worstCaseHours(task)}</td>
                </tr>
            );
        },

        rows = this.props.tasks.map(row);

        return (
            <table className="table table-striped">
                <tr>
                    <th>Task title</th>
                    <th>Estimation range (hours)</th>
                </tr>

                {rows}
            </table>
        );
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default StoryTasks;
