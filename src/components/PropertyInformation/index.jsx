import '../../styles/PropertyInformation/PropertyInformation.css'
import Collapse from '../Collapse'
import Rating from '../Rating'
import Tags from '../Tags'


function PropertyInformation({title, location, hostName, hostPicture, tags, rating, description, element, equipmentDescription }) {

  

    return (
        <div className="information-container">
            <div className="first-line">
                <div className="location-title">
                    <h1>{title}</h1>
                    <p>{location}</p>
                </div>
                <div className="property-tags-mobile">
                    <Tags
                    array={tags} />
                </div>
                <div className="location-owner">
                    <h2>{hostName}</h2>
                    <img src={hostPicture} alt="" />

                </div>
            </div>
            <div className="second-line">
                <div className="property-tags">
                    <Tags
                    array={tags} />

                </div>
                <div className="property-rating">
                    <Rating
                    rating={rating}
                    />
                </div>
                <div className="location-owner-mobile">
                    <h2>{hostName}</h2>
                    <img src={hostPicture} alt="" />
                </div>
            </div>
            <div className="third-line">
                <div className="property-description">
                <Collapse 
                    title= 'Description'
                    description={description}/>
                </div>
                <div className="property-equipment">
                    <Collapse
                    className = 'collapse'
                    title='Equipements'
                    description={
                        equipmentDescription.map((element) => (
                        <ul>
                            <li>{element}</li>  
                        </ul>
                        ))
                        }
                    />
                   
                </div>
            </div>
        </div>
    )
}

export default PropertyInformation