import { useState } from 'react'
import properties from '../../Datas/datas.json'




function SlideShow() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {setCurrentIndex(currentIndex + 1)}
    const prevImage = () => {setCurrentIndex(currentIndex - 1)}


    return (
        <div>
            <div className='cover-container'>
                <img src= { properties[0].pictures[currentIndex]} alt="Carrousel" />
                <div className='button-container'>
                    <button onClick={prevImage}> Précédent </button>
                    <button onClick={nextImage}>  Next </button>
                </div>
            </div>
            
        </div>
    )

}

export default SlideShow