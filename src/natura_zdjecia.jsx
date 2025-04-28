import React, { useState } from 'react';

function Plants_Photos(){
    const [isVisible, setIsVisible] = useState(false);
    const ShowPlants = () =>{
        setIsVisible(!isVisible);
    }
    return(
        <>
            <button class="ShowHideButton" onClick={ShowPlants}>Roślinki</button>
            <div id="Plants_Container" class="photos_container">
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2020/03/28/12/22/flowers-4976830_1280.jpg" 
                    alt="Roslina jpg" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2020/03/28/12/22/flowers-4976830_1280.jpg" 
                    alt="Roslina jpg" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
                <img 
                    class="human" 
                    src="https://cdn.pixabay.com/photo/2020/03/28/12/22/flowers-4976830_1280.jpg" 
                    alt="Roslina jpg" 
                    style={{ display: isVisible ? 'block' : 'none' }} 
                />
            </div>
        </>
    )
}
export default Plants_Photos