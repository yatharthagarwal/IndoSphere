function ImpactsIcon(props) {
    return (
        <li className="impacts-icons">
        <div className="icon-container">
            <img src={props.img} alt={props.alt} />
        </div>
        <div className="content">
            <h4>{props.heading}</h4>
            <p>
                {props.children}
            </p>
        </div>
        </li>
    )
}

export default ImpactsIcon;