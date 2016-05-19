import React, {Component} from "react";

class User extends Component {
    render() {
        return (
                 <div key={this.props.userId} className="post-title">
                     <img className="avatar" src={ "images/avatar-" + this.props.userId + ".gif" } />
                     <a href={this.props.userId}>{this.props.userName}</a> said:
                 </div>
        );	
    }
}

export default User;
