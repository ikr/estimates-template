import {total75PercentLikelyHours} from 'estimate-tasks';

const estimateTasks = tasks => {
    return Math.round(total75PercentLikelyHours(
        tasks.map(task => {
            return {
                bestCaseHours: task[1],
                mostLikelyCaseHours: (task[1] + task[2]) / 2.0,
                worstCaseHours: task[2],
                confidencePercent: 95
            };
        })
    ));
};

export default estimateTasks;
