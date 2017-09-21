const React = require('react')
const ReactDOM = require('react-dom')
const axios = require('axios')
const Header = require('./Header.jsx')
const CommentForm = require('./CommentForm.jsx')
const CommentList = require('./CommentList.jsx')
require('../index.css')

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: []
    }

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  componentDidMount() {
    axios
      .get('https://threadly-on-node.herokuapp.com/comments')
      .then(comments => {
        this.setState({
          comments: comments.data
        })
      })
      .catch(err => console.log(err))
  }

  handleCommentSubmit(comment) {
    axios
      .post('https://threadly-on-node.herokuapp.com/comments/' + comment)
      .then(() => {
        let newArray = this.state.comments.slice()
        newArray.push({ _id: Math.random(), comment: comment })
        this.setState({
          comments: newArray
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="container">
            <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            <CommentList comments={this.state.comments} onCommentClick={this.handleCommentClick} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
