import React, {useState} from 'react';
import '../../styles/Collapse/Collapse.css'
import icon from '../../assets/icon_button.png'


function Collapse({collapseTitle, collapseText}) {

    const [isVisible, setIsVisible] = useState(false);

    const activeVisibility = () => {
        setIsVisible(!isVisible);
    }
    return (
        <div className="container">
      <div className="item">
        <div className="title">
            <h2>{collapseTitle}</h2>
            <button id="button" onClick={activeVisibility}>
                <img 
                    src={icon} 
                    alt="bouton en forme d'accent circonflexe"
                    className={isVisible ? 'rotate' : ''}/>
            </button>
         </div>
         <div 
            className= {`description ${isVisible ? 'visible' : ''}`}
         >
            <div className='description-content'>
                <span>{collapseText}</span>
            </div>
         </div>
      </div>
    </div>

    )

}

export default Collapse