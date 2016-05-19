function handleTopicClicked(state, id) {
    return Object.assign({}, state, {
        topics: state.topics.map(topic => Object.assign({}, topic, {
            expanded: topic.id === id
        }))
    });
}

export default (state, action) => {
    switch (action.type) {
        case "TOPIC_CLICKED":
            return handleTopicClicked(state, action.id);
        default:
    }
    return state;
}
