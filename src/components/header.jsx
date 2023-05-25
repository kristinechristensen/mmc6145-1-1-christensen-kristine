import { Link } from 'react-router-dom'
import kcLogo from '../assets/thickswKCLogo.png'

export default function Header() {
  return (

  <header>
    <Link to="/"><img src={kcLogo} style={{height:'40px', margin:'5px 0 5px 25px'}} /></Link>
    <Link to="/">Home</Link>
    <Link to="/about">About Me</Link>
    <Link to="/contact">Contact</Link>
    </header>
  )
}