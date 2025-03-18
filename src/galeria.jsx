function Human_Photos(){
    const IsVisableHuman= false;
    const ShowHuman = () =>{

    }
    return(
        <>
            <button onClick={ShowHuman}>Ludzie</button>
            <div id="Human_Container">
                <img class="human" src="https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png" alt="Typ z psem" />
                <img class="human" src="https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png" alt="Typ z psem" />
                <img class="human" src="https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png" alt="Typ z psem" />
            </div>
        </>
    )
}
export default Human_Photos