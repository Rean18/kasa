import React, { useEffect } from 'react';
import properties from '../../Datas/datas.json';
import SlideShow from '../../components/SlideShow';
import PropertyInformation from '../../components/PropertyInformation';
import { useParams, useNavigate } from 'react-router-dom';

function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    console.log('ID from URL:', id); // Log pour vérifier l'ID

    const property = properties.find(prop => prop.id === id);
    console.log('Found Property:', property); // Log pour vérifier si la propriété est trouvée

    useEffect(() => {
        if (!property) {
            console.log("Logement non trouvé, redirection vers la page d'erreur");
            navigate('/error'); // Navigue vers la page d'erreur
        }
    }, [property, navigate]);

    if (!property) {
        console.log("Propriété non trouvée, retour null pour le rendu"); // Log pour vérifier le retour null
        return null; // Ou un message de chargement/spinner
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
