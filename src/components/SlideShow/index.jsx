import { useState } from 'react'
import '../../styles/SlideShow/SlideShow.css'
import iconPrev from '../../assets/icon_slider_prev.png'
import iconNext from '../../assets/icon_slider_next.png'




function SlideShow({pictures}) {



    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((index) => (index + 1) % pictures.length)}

    const prevImage = () => {
        setCurrentIndex((index) => (index - 1 + pictures.length) % pictures.length)};


    return (
        <div>
            <div 
            className='cover-container'
            style={{backgroundImage: `url(${pictures[currentIndex]})`}}
            >
                <div className='button-container'>
                    <button onClick={prevImage}> 
                        <img src={iconPrev} alt='icone précédent' />
                    </button>
                    <button onClick={nextImage}>
                    <img src={iconNext} alt='icone suivant' />
                    </button>
                </div>
                <div className='index-indication'>
                    <p>{currentIndex + 1}/{pictures.length}</p>
                </div>
                
            </div>
            
        </div>
    )

}

export default SlideShow