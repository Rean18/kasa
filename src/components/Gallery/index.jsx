import '../../styles/styles.css'
import '../../styles/Gallery/Gallery.css'
import Card from '../Card/index'
import logements from '../../Datas/datas.json'
import { useNavigate } from 'react-router-dom'



function Gallery() {

    const navigate = useNavigate();
    const handleClick = (id) => {
       
            navigate(`/property-details/${id}`)     
    };
    return (
        <div className='gallery'>
            {logements.map((logement) => (
                <Card 
                key = {logement.id}
                title = {logement.title}
                cover = {logement.cover}
                onClick = {() => handleClick(logement.id)}
                />
            )
            )}
        </div>
        
    )

}

export default Gallery