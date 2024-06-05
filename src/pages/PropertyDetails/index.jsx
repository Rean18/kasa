import properties from '../../Datas/datas.json'
import SlideShow from '../../components/SlideShow'
import PropertyInformation from '../../components/PropertyInformation'
import { useParams } from 'react-router-dom'


function PropertyDetails() {

    const params = useParams();
    const id = params.id
    const property = properties.find(prop => prop.id === id);



    
    return (
        <div className='property-container'>
            <SlideShow pictures = {property.pictures} />
            <PropertyInformation
            title={property.title}
            location={property.location}
            hostName={property.host.name}
            hostPicture={property.host.picture}
            tags = {property.tags}
            rating={property.rating}
            description={property.description}
            equipmentDescription={property.equipments}
            />

            
           

        </div>
    )
}

export default PropertyDetails