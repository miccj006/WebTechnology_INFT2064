import { useState, useEffect } from 'react'
import Card from './CardV3'

const CardListSearch = ({ }) => {
    const [cardData, setState] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5154/api/ItemsWebAPI?searchText=${query}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    }, [query])

    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value;
        //alert('value: ' + value);
        setQuery(value);
    }

    return (
        <div className="cardListSearch">
            <div className="row justify-content-center m-5">
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" placeholder="Type your query" />
                </div>
                <div className="col text-left">
                    <button type="button" className="btn btn-primary" onClick={ searchQuery }>Search</button>
                </div>
            </div>
            <div id="cardList" className="row justify-content-center m-5">
                {cardData.map((obj) => (
                    <Card 
                        key={obj.itemId}
                        itemId={obj.itemId}
                        itemName={obj.itemName}
                        itemDescription={obj.itemDescription}
                        itemCost={obj.itemCost}
                        itemImage={obj.itemImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardListSearch