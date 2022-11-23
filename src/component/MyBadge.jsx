import { Badge } from "react-bootstrap"

const MyBadge = ({ badgeMessage, badgeColor }) => (
  <Badge variant={badgeColor}>{badgeMessage}</Badge>
)

export default MyBadge
