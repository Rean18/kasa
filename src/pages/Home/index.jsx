import '../../styles/styles.css'
import '../../styles/Home/Home.css'
import Gallery from '../../components/Gallery/index'
import Banner from '../../components/Banner/index'
import photo from '../../assets/image_banner_home.png'


function Home() {
  return (
    <main>
      <Banner
      photo = {photo}
      showTitle={true} />

      <div>
        <Gallery />
      </div>
    </main>
    
  )
}

export default Home