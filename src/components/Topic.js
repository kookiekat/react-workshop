import React, {Component} from "react";

class Topic extends Component {
    render() {
        return (
        	<div>
            	<h1>{this.props.subject}</h1>
				{this.props.children}
            </div>
        );	
    }
}

export default Topic;
