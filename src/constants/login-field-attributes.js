import { IoPersonSharp } from "react-icons/io5"
import { RiLockFill } from "react-icons/ri"

const LOGIN_FIELD_ATTRIBUTES = [
  {
    autoFocus: true,
    icon: <IoPersonSharp />,
    name: "email",
    placeholder: "Email...",
    type: "email"
  },
  {
    autoFocus: false,
    icon: <RiLockFill />,
    name: "password",
    placeholder: "Mot de passe...",
    type: "password"
  }
]

export default LOGIN_FIELD_ATTRIBUTES