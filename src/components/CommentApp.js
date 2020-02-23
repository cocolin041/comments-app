import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import '../styles/CommentApp.scss'

class CommentApp extends Component {
	constructor() {
		super()
		this.state = {
			comments: []
		}
	}
        
	handleSubmitComment(comment) {
		let comments = this.state.comments
		comments.push(comment)
		this.setState({comments: comments})
	}

  render () {
    return (
			<div className='wrapper'>
				{/* <div className='welcome'>
					<div className='secret-sentence-left'>This is a secret</div>
					<div className='secret-sentence-right'>This is another one</div>
				</div> */}
				<h1 className='title'>CommentNow</h1>
				<div className='comment-app'>
					<CommentInput className='comment-input' onSubmit={this.handleSubmitComment.bind(this)}/>
					<CommentList className='comment-list' comments={this.state.comments}/>
				</div>
			</div>
    )
  }
}

export default CommentApp
