import '../../styles/Banner/Banner.css'


const Banner = ({photo, showTitle}) => {
    return (
        <div className="banner" 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${photo})`}}>
            {showTitle && (
                <h1>Chez vous, <br className='banner_line' />
                partout et ailleurs</h1>
            )

            }
        
       </div>

)}








export default Banner