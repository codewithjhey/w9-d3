import { Alert } from "react-bootstrap"

const WarningSign = ({ alertMessage }) => (
  <Alert variant={"danger"}>{alertMessage}</Alert>
)

export default WarningSign
