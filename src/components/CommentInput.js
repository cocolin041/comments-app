import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/CommentInput.scss'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor () {
    super()
    this.state = {
        username: '',
        content: ''
    }
  }

  // Do maipulations that don't rely on DOM
  componentWillMount() {
    this._loadUsername()
  }
  // Do maipulations that do rely on DOM
  componentDidMount() {
    this.textarea.focus()
  }

  // every private method(only be called inside this class / helper functions) should named begin with '_'
  _saveUsername(username) {
    localStorage.setItem('username', username)
  }
  _loadUsername() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({username: username})
    }
  }

  // every method that use for 'on-' event should named begin with 'handle'
  handleUsernameChange(event) {
      this.setState({username: event.target.value})
  }
  handleUsernameBlur(event) {
    this._saveUsername(event.target.value)
  }
  handleContent(event) {
    this.setState({content: event.target.value})
	}
  // Receive the onSubmit method from parent component
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
                  <input 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange.bind(this)} 
                    onBlur={this.handleUsernameBlur.bind(this)}/>
              </span>
          </div>
          <div className='comment-field'>
              <span className='comment-field-name'>Comment:</span>
              <div className='comment-field-input'>
                <textarea 
                  ref={(textarea) => this.textarea = textarea}
                  value={this.state.content} 
                  onChange={this.handleContent.bind(this)} />
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
