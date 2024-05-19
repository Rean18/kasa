import '../../styles/Footer/Footer.css'
import logoFooter from'../../assets/logo-footer.png'

function Footer() {

    return (
        <footer>
            <div>
                <img src={logoFooter} alt='Logo Kasa en couleur blanche' />
            </div>
            <div className="mentions">
                <p>© 2020 Kasa.All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer