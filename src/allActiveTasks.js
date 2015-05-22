const allActiveTasks = (storiesData, storiesState) => {
    return storiesData.reduce((memo, story, index) => {
        const state = storiesState[index];
        return (state.active ? memo.concat(story.tasks) : memo);
    }, []);
}

export default allActiveTasks;
