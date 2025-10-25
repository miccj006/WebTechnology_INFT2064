const CardV3 = ({ itemId, itemName, itemDescription, itemCost, itemImage }) => (
    <div className="card col-4 m-2" style={{ width: 18 + 'rem' }} >
        <img className="card-img-top" src={itemImage} alt={"Image of " + itemName} />
        <div className="card-body">
            <h5 className="card-title">{itemName}</h5>
            <p className="card-text">{itemDescription}</p>
            <p className="card-text">${itemCost}</p>
            <a hrel="#" className="btn btn-primary">Go somewhere {itemId}</a>
        </div>
    </div>
)

export default CardV3