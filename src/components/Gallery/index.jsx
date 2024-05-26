import '../../styles/styles.css'
import '../../styles/Gallery/Gallery.css'
import Card from '../Card/index'
import logements from '../../Datas/datas.json'

function Gallery() {
    return (
        <div className='gallery'>
            {logements.map((logement) => (
                <Card 
                key = {logement.id}
                title = {logement.title}
                cover = {logement.cover}
                

                />

            )

            

            )}
           
                
        
        </div>
        
    )

}

export default Gallery