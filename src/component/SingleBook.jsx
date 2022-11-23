import { Card, Col } from "react-bootstrap"
import { Component } from "react"

class SingleBook extends Component {
  state = {
    selected: false
  }

  handleSelected = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true })
    } else {
      this.setState({ selected: false })
    }
  }

  render() {
    return (
      <Col md={4} key={this.props.book.asin}>
        <Card
          className="book-card my-3"
          style={{
            width: "18rem",
            border: this.state.selected ? "2px solid magenta" : ""
          }}
          onClick={() => this.handleSelected()}
        >
          <Card.Img className="book-card-img" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
