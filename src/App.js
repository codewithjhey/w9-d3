import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./component/WarningSign"
import MyBadge from "./component/MyBadge"
import BookList from "./component/BookList"

function App() {
  return (
    <div>
      <WarningSign alertMessage={"Danger!"} />
      <MyBadge badgeMessage={"Here is the badge"} badgeColor={"success"} />
      <BookList />
    </div>
  )
}

export default App
