import React, { useState } from 'react';

function Dog_Photos(){
    const [isVisible, setIsVisible] = useState(false);
    const ShowDog = () =>{
        setIsVisible(!isVisible);
    }
    return(
        <>
            <button class="ShowHideButton" onClick={ShowDog} >Pieseł</button>
            <div id="Plants_Container" class="photos_container">
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg" 
                    alt="pies jpg" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg" 
                    alt="pies jpg" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg" 
                    alt="pies jpg" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
            </div>
        </>
    )
}
export default Dog_Photos