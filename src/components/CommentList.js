import React from 'react'
import Comment from './Comment'

const CommentList = ({comments = []}) => {
	return (
		<div>
			{comments.map((comment, i) => <Comment key={i} comment={comment}/> )}
		</div>
	)
}

export default CommentList
