import polyfill from 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import Story from './src/Story';
import StoriesTotal from './src/StoriesTotal';
import allActiveTasks from './src/allActiveTasks';
import content from './content';

if (!polyfill) {
    throw new Error('False-y Babel polyfill');
}

function storiesState(count) {
    return new Array(count).fill({active: true, displayTasks: false});
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stories: storiesState(this.props.stories.length)};
    }

    render() {
        const tasks = allActiveTasks(this.props.stories, this.state.stories);

        return (
            <div className='container'>
                <h1>Sample user stories</h1>
                {this.stories()}
                <StoriesTotal allTasks={tasks}/>

                <ul className='footer text-right list-unstyled'>
                    <li>May 2015</li>

                    <li>
                        Ivan Krechetov &lt;<a href='mailto:ikr@ikr.su'>ikr@ikr.su</a>&gt;
                    </li>
                </ul>
            </div>
        );
    }

    stories() {
        return this.props.stories.map((story, index) => {
            const onChangeActivity = () => {
                    this.toggleStoryActivity(index);
                },

                onToggleTasks = () => {
                    this.toggleStoryTasks(index);
                },

                state = this.state.stories[index];

            return <Story
                key={`k${index}`}
                narrative={story.narrative}
                tasks={story.tasks}
                active={state.active}
                displayTasks={state.displayTasks}
                onChangeActivity={onChangeActivity}
                onToggleTasks={onToggleTasks}/>;
        });
    }

    toggleStoryActivity(index) {
        const stories = this.state.stories.slice();

        stories[index] = Object.assign({}, stories[index], {active: !stories[index].active});
        this.setState({stories});
    }

    toggleStoryTasks(index) {
        const stories = this.state.stories.slice();

        stories[index] = Object.assign(
            {},
            stories[index],
            {displayTasks: !stories[index].displayTasks}
        );

        this.setState({stories});
    }
}

Container.defaultProps = {stories: content};

/* global global */
render(<Container/>, global.document.getElementById('root'));
