import React from 'react';

function row([title, bestCaseHours, worstCaseHours], index) {
    return (
        <tr key={`k${index}`}>
            <td>{title}</td>
            <td>{bestCaseHours}-{worstCaseHours}</td>
        </tr>
    );
}

class StoryTasks extends React.Component {
    render() {
        const rows = this.props.tasks.map(row);

        return (
            <table className='table table-striped'>
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
