import {Link} from 'react-router-dom'
import '../../styles/Header/Header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
        <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li> <Link to="/">Accueil</Link></li>
          <li><Link to="/about">A Propos</Link></li>
        </ul> 
      </nav>
    </header>
    
  )
}

export default Header