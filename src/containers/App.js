import React from "react";
import User from "../components/User"
import Post from "../components/Post"
import Topic from "../components/Topic"


class App extends React.Component {
    render() {
        console.log(this.props.topics);
        return (
            <div>
                {this.props.topics.map( topic => 
                    <Topic key={topic.id} subject={topic.subject}>
                         {topic.posts.map((post, i) =>
                             <Post key={i} message={post.message} date={post.date}>
                                 <User userId={post.poster.id}
                                     userName={post.poster.name}
                                 />
                             </Post>
                         )}
                     </Topic>
                )}
            </div>
        );	
    }
}

export default App;