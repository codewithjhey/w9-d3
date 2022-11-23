import { Card } from "react-bootstrap"
import { Component } from "react"


class SingleBook extends Component {
    state = {
        selected: false
      }


    handleSelected = ()  => {
        if( this.state.selected === false) {
            this.setState({selected:true})
        } else {
            this.setState({selected:false})
        }
    }
    
      render() {
return (
  <Card className="book-card my-3" style={{ width: "18rem" }} onClick = {() => this.handleSelected()} >
    <Card.Img className="book-card-img" variant="top" src={book.img} />
    <Card.Body>
      <Card.Title>{book.title} </Card.Title>
    </Card.Body>
  </Card>
)
}

export default SingleBook
