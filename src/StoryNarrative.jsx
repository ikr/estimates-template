import React      from 'react';
import {markdown} from 'markdown';

class StoryNarrative extends React.Component {
    render() {
        const html = {__html: markdown.toHTML(this.props.markdown)};
        return <div dangerouslySetInnerHTML={html}/>;
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default StoryNarrative;
