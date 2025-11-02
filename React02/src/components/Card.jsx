function Card(props){
    
    return(
        <>
            <div className="aCard">
                <img src={props.imgUrl} alt="Card Containg Image" />
                <div className="hCard">
                    <p>{props.discr}</p>
                    <button>{props.btnText}</button>
                </div>
            </div>
        </>
    )
}


export default Card