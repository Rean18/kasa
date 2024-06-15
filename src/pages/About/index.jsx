import '../../styles/About/About.css'
import Banner from '../../components/Banner/index'
import photo from '../../assets/banner_about.png'
import Collapse from '../../components/Collapse'



function About() {
    return (
        <main>
            <Banner
            photo = {photo}
            showTitle={false} />

            <Collapse 
                collapseTitle='Fabilité' 
                collapseText='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées
                par nos équipes.'
            />
            <Collapse 
                collapseTitle = 'Respect' 
                collapseText ='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainement une exclusion de
                la plateforme.' 
            />
            <Collapse 
                collapseTitle = 'Service' 
                collapseText='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainement une exclusion de
                la plateforme.'
            />
            <Collapse 
                collapseTitle = 'Sécruité' 
                collapseText="La sécurité est la priorité de Kasa. Aussi bien pous nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité
                domestiques pour nos hôtes."
            />

            
                
            
        </main>
    )
}

export default About