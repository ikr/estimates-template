import React from 'react';
import PropTypes from 'prop-types';

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
                <tbody>
                    <tr>
                        <th>Task title</th>
                        <th>Estimation range (hours)</th>
                    </tr>

                    {rows}
                </tbody>
            </table>
        );
    }

    shouldComponentUpdate() {
        return false;
    }
}

StoryTasks.propTypes = {tasks: PropTypes.array.isRequired};

export default StoryTasks;
