import React, {useState, useRef} from 'react';
import '../../styles/Collapse/Collapse.css'
import icon from '../../assets/icon_button.png'


function Collapse({title, description}) {

    const [isVisible, setIsVisible] = useState(false);
    const descriptionRef = useRef(null);

    const activeVisibility = () => {
        setIsVisible(!isVisible);
    }
    return (
        <div class="container">
      <div class="item">
        <div class="title">
            <h2>{title}</h2>
            <button id="button" onClick={activeVisibility}>
                <img 
                    src={icon} 
                    alt="bouton en forme d'accent circonflexe"
                    className={isVisible ? 'rotate' : ''}/>
            </button>
         </div>
         <div 
            className= {`description ${isVisible ? 'visible' : ''}`}
            ref={descriptionRef}
         >
            <div className='description-content'>
                <p>{description}</p>
            </div>
         </div>
      </div>
    </div>

    )

}

export default Collapse