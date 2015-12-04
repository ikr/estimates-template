/* eslint global-require: 0 */
/* global require */

export default () => [{
    narrative: require('./stories/one/narrative.md'),
    tasks: require('./stories/one/tasks.json')
}, {
    narrative: require('./stories/two/narrative.md'),
    tasks: require('./stories/two/tasks.json')
}];
