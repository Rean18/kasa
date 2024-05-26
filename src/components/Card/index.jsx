import '../../styles/styles.css'
import '../../styles/Card/Card.css'



    const Card = ({title, cover}) => {

    return (

        <div className='card'>
            <div className="image_container">
                <img alt={title} src={cover} />
                <h2>{title}</h2>
            </div>
        </div>
    )

}

export default Card