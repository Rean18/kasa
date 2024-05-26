import '../../styles/About/About.css'
import Banner from '../../components/Banner/index'
import photo from '../../assets/banner_about.png'



function About() {
    return (
        <main>
            <Banner
            photo = {photo}
            showTitle={false} />
            
                
            
        </main>
    )
}

export default About