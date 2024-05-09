import {Link} from 'react-router-dom'
import '../../styles/Header.css'

function Header() {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <ul>
          <li> <Link to="/">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
          <li><Link to="/property-details">Fiche du logement</Link></li>
        </ul>
        
        
      </nav>
    </header>
    
  )
}

export default Header