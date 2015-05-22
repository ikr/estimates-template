import React          from 'react';
import Story          from './src/Story';
import StoriesTotal   from './src/StoriesTotal';
import allActiveTasks from './src/allActiveTasks';
import content        from './content'

const storiesState = (length) => {
    return new Array(length).fill({active: true, displayTasks: false});
};

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stories: storiesState(this.props.stories.length)};
    }

    render() {
        const stories = this.props.stories.map((story, index) => {
                const onChangeActivity = () => {
                        this.toggleStoryActivity(index);
                    },

                    onToggleTasks = () => {
                      this.toggleStoryTasks(index);
                    },

                    state = this.state.stories[index];

                return <Story
                    key={'k' + index}
                    narrative={story.narrative}
                    tasks={story.tasks}
                    active={state.active}
                    displayTasks={state.displayTasks}
                    onChangeActivity={onChangeActivity}
                    onToggleTasks={onToggleTasks}/>;
            }),

            tasks = allActiveTasks(this.props.stories, this.state.stories);

        return (
            <div className="container">
                <h1>Swissport layover user stories</h1>
                {stories}
                <StoriesTotal allTasks={tasks}/>

                <ul className="footer text-right list-unstyled">
                    <li>March 2015</li>

                    <li>
                        Ivan Krechetov &lt;<a href="mailto:ikr@xiag.ch">ikr@xiag.ch</a>&gt;
                    </li>

                    <li>XIAG AG/Swiss Travel Centre</li>
                </ul>
            </div>
        );
    }

    toggleStoryActivity(index) {
        let stories = this.state.stories.slice();
        stories[index] = Object.assign({}, stories[index], {active: !stories[index].active});
        this.setState({stories});
    }

    toggleStoryTasks(index) {
        let stories = this.state.stories.slice();
        stories[index] = Object.assign({}, stories[index], {displayTasks: !stories[index].displayTasks});
        this.setState({stories});
    }
}

Container.defaultProps = {stories: content()};

React.render(React.createElement(Container), global.document.body);
