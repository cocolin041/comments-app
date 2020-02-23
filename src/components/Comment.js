import React from 'react'
import '../styles/Comment.scss'

const Comment = (props) => {
	const { username, content } = props.comment
	return (
		<div className='comment'>
				<div className='username'>{username} : </div>
				<p> {content}</p>
		</div>
	)
}

export default Comment
