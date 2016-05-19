import React, {Component} from "react";

class Post extends Component {
    render() {
        return (
	    	<div className="post-container">
				{this.props.children}
		 		<div>{this.props.message}</div>
		 		<div className="post-date">~ {this.props.date}</div>
	     	</div>
        );	
    }
}

export default Post;
