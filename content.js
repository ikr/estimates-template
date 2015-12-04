var fs = require('fs');

module.exports = [{
    narrative: fs.readFileSync(__dirname + '/stories/one/narrative.md', 'utf8'),
    tasks: require('./stories/one/tasks')
}, {
    narrative: fs.readFileSync(__dirname + '/stories/two/narrative.md', 'utf8'),
    tasks: require('./stories/two/tasks')
}];
