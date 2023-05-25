import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact</Link>
    </header>
  )
}