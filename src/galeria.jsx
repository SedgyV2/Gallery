import React, { useState } from 'react';

function Human_Photos(){
    const [isVisible, setIsVisible] = useState(false);
    const ShowHuman = () =>{
        setIsVisible(!isVisible);
    }
    return(
        <>
            <button class="ShowHideButton" onClick={ShowHuman}>Ludzie</button>
            <div id="Human_Container" class="photos_container">
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png" 
                    alt="Typ z psem" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png" 
                    alt="Typ z psem" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png" 
                    alt="Typ z psem" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
            </div>
        </>
    )
}
export default Human_Photos