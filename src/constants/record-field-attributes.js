import { FaEnvelope } from "react-icons/fa"
import { IoPersonSharp } from "react-icons/io5"
import { RiLockFill } from "react-icons/ri"

const RECORD_FIELD_ATTRIBUTES = [
  {
    autoFocus: true,
    icon: <IoPersonSharp />,
    name: "fullName",
    placeholder: "Nom complet...",
    type: "text"
  },
  {
    autoFocus: false,
    icon: <FaEnvelope />,
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
  },
  {
    autoFocus: false,
    icon: <RiLockFill />,
    name: "confirmPassword",
    placeholder: "Confirmation du mot de passe...",
    type: "password"
  }
]

export default RECORD_FIELD_ATTRIBUTES