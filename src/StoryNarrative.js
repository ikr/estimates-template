import React from 'react';
import {markdown} from 'markdown';

class StoryNarrative extends React.Component {
    render() {
        const html = {__html: markdown.toHTML(this.props.markdown)};

        // eslint-disable-next-line react/no-danger
        return <div dangerouslySetInnerHTML={html}/>;
    }

    shouldComponentUpdate() {
        return false;
    }
}

StoryNarrative.propTypes = {markdown: React.PropTypes.string.isRequired};

export default StoryNarrative;
