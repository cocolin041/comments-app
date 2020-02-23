import React, { Component } from 'react'
import '../styles/CommentInput.scss'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
        username: '',
        content: ''
    }
  }

  handleUserName(event) {
      this.setState({username: event.target.value})
  }

  handleContent(event) {
    this.setState({content: event.target.value})
	}
	
	handleSubmit() {
		if (this.props.onSubmit) {
			const {username, content} = this.state
			this.props.onSubmit({username, content})
		}
		this.setState({content: ''})
	}

  render () {
    return (
      <div className='comment-input'>
          <div className='comment-field'>
              <span className='comment-field-name'>UserName:</span>
              <span className='comment-field-input'>
                  <input value={this.state.username} onChange={this.handleUserName.bind(this)}/>
              </span>
          </div>
          <div className='comment-field'>
              <span className='comment-field-name'>Comment:</span>
              <div className='comment-field-input'>
                <textarea value={this.state.content} onChange={this.handleContent.bind(this)}/>
              </div>
          </div>
          <div className='comment-field-button'>
              <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          </div>
      </div>
    )
  }
}

export default CommentInput
