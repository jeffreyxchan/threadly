const React = require('react')

class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({ comment: e.target.value })
  }

  handleCommentSubmit(e) {
    e.preventDefault()
    this.props.onCommentSubmit(this.state.comment)
    this.setState({
      comment: ''
    })
  }

  render() {
    return (
      <div className="row">
        <form className="form" onSubmit={this.handleCommentSubmit}>
          <div className="col-sm-12 col-md-10">
            <input
              id="comment"
              type="text"
              value={this.state.comment}
              onChange={this.handleInputChange}
              placeholder="A penny for your thoughts?"
              autoComplete="off"
            />
          </div>
          <div className="col-xs-4 col-md-2">
            <button type="submit" className="btn">
              post
            </button>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = CommentForm
