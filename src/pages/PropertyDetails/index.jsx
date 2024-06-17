import React, { useEffect } from 'react';
import properties from '../../Datas/datas.json';
import SlideShow from '../../components/SlideShow';
import PropertyInformation from '../../components/PropertyInformation';
import { useParams, useNavigate } from 'react-router-dom';

function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const property = properties.find(prop => prop.id === id);

    useEffect(() => {
        if (!property) {
            navigate('/error'); 
        }
    }, [property, navigate]);

    if (!property) {
        return null; 
    }

    return (
        <div className='property-container'>
            <SlideShow pictures={property.pictures} />
            <PropertyInformation
                title={property.title}
                location={property.location}
                hostName={property.host.name}
                hostPicture={property.host.picture}
                tags={property.tags}
                rating={property.rating}
                description={property.description}
                equipmentDescription={property.equipments}
            />
        </div>
    );
}

export default PropertyDetails;
