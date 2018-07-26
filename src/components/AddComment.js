import React from 'react';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChange = (e) => {
        this.setState({ text: e.target.value });
    }

    addNewComment = () => {
        this.props.addComment(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.text} placeholder='Write new comment' onChange={this.onChange} />
                <button onClick={this.addNewComment}>Add comment</button>
            </div>
        )
    }
}

export default AddComment;