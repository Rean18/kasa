import '../../styles/styles.css'
import '../../styles/Card/Card.css'



    const Card = ({title, cover, onClick}) => {

    return (

        <div className='card'>
            <div className="image_container" onClick={onClick}>
                <img alt={title} src={cover} />
            </div>
            <div className='title-container'>
            <h2>{title}</h2>
            </div>
        </div>
    )

}

export default Card