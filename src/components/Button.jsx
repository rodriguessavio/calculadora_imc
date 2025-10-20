import './Button.css'

const Button = ({ text, id }) => {
  return (
    <button id={id}>{text}</button>
  )
}

export default Button