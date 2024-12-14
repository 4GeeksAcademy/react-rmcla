import React from "react" ;

const Card = (props) => {
    const { cardImgSrc, cardTitle, cardText } = props.vatos;
    return (
        <div className="card h-100">
            <img src={cardImgSrc} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={cardTitle} />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text" style={{ height: '100px', objectFit: 'cover' }}>{cardText}</p>
                <hr style={{ border: 'none', height: '1px', backgroundColor: '#343a40', margin: '0 -15px', marginBottom: '20px' }} />
                <button className="btn btn-warning">
                    Chale!
                </button>
            </div>
        </div>
    );
};
export default Card


