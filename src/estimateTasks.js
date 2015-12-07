import {total75PercentLikelyHours} from 'estimate-tasks';

export default tasks => Math.round(total75PercentLikelyHours(
    tasks.map(([, bestCaseHours, worstCaseHours]) => ({
        bestCaseHours,
        mostLikelyCaseHours: (bestCaseHours + worstCaseHours) / 2.0,
        worstCaseHours,
        confidencePercent: 95
    }))
));
