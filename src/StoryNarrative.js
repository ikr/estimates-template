import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const renderer = new marked.Renderer();
const tableOrg = renderer.table;

renderer.table = (header, body) => tableOrg(header, body).replace(
    '<table>',
    '<table class="table table-bordered">'
);

class StoryNarrative extends React.Component {
    render() {
        const html = {__html: marked(this.props.markdown, {renderer})};

        // eslint-disable-next-line react/no-danger
        return <div dangerouslySetInnerHTML={html}/>;
    }

    shouldComponentUpdate() {
        return false;
    }
}

StoryNarrative.propTypes = {markdown: PropTypes.string.isRequired};

export default StoryNarrative;
