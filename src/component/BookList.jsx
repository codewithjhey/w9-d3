import { Component } from "react"
import history from "../data/history.json"
import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    filter: " "
  }

  filterBookList = (value) => {
    this.setState({
      filter: value
    })
  }

  render() {
    return (
      <Container>
        <input
          type="text"
          onKeyUp={(e) => this.filterBookList(e.target.value)}
        ></input>
        <Row>
          {history
            .filter((book) => book.title.includes(this.state.filter))
            .map((book) => {
              return (
                <Col sm={6} md={4} lg={3} key={book.asin}>
                  <SingleBook book={book} />
                </Col>
              )
            })}
        </Row>
      </Container>
    )
  }
}
export default BookList
