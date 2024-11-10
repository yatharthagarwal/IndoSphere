
function SpeciesCard(props) {
    return (
        <div className="species-card">
            <img src={props.imageUrl} alt= {props.imageAlt}/>
            <p>{props.imageAlt}</p>
            {/* <div className="tooltip">{props.tooltip}</div> */}
        </div>
    )
}

export default SpeciesCard;