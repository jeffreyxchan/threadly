const React = require('react')
const axios = require('axios')

const CommentList = props => {
  let handleCommentClick = e => {
    e.target.remove()
    axios.post('https://threadly-on-node.herokuapp.com/comments/delete/' + e.target.innerHTML)
  }

  let comments = props.comments.slice().reverse()
  return (
    <ul className="comments" id="comments">
      {comments.map(comment => {
        return (
          <li key={comment._id} onClick={handleCommentClick}>
            {comment.comment}
          </li>
        )
      })}
      <li>Your thoughts, notes, and comments appear here.</li>
    </ul>
  )
}

module.exports = CommentList
