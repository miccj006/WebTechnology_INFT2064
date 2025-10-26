import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import CardV2 from './components/CardV2'
import CardV3 from './components/CardV3'
import CardList from './components/CardListSearch'

function App() {
    return (
        <div className="App Container">
            <div className="bg-light py-1 mb-2">
                <h2 className="text-center">Example Application</h2>
            </div>

            {/*<div className="row justify-content-center">*/}
            {/*    <Card itemId="1"*/}
            {/*        itemName="test record 1"*/}
            {/*        itemDescription="test record 1 Desc"*/}
            {/*        itemImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkm32.com%2Fwp-content%2Fuploads%2Fmejores-practicas-optimizacion-imagenes-pagina-web.jpg&f=1&nofb=1&ipt=1c2d770719965b46cf622e190e92a6a59142301598c4db0c6844edf5bbb78efa"*/}
            {/*        itemCost="15.00"*/}
            {/*    />*/}
            {/*    <CardV2 itemId="2"*/}
            {/*        itemName="test record 2"*/}
            {/*        itemDescription="test record 2 Desc"*/}
            {/*        itemImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkm32.com%2Fwp-content%2Fuploads%2Fmejores-practicas-optimizacion-imagenes-pagina-web.jpg&f=1&nofb=1&ipt=1c2d770719965b46cf622e190e92a6a59142301598c4db0c6844edf5bbb78efa"*/}
            {/*        itemCost="10.00"*/}
            {/*    />*/}
            {/*    <CardV3 itemId="3"*/}
            {/*        itemName="test record 3"*/}
            {/*        itemDescription="test record 3 Desc"*/}
            {/*        itemImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkm32.com%2Fwp-content%2Fuploads%2Fmejores-practicas-optimizacion-imagenes-pagina-web.jpg&f=1&nofb=1&ipt=1c2d770719965b46cf622e190e92a6a59142301598c4db0c6844edf5bbb78efa"*/}
            {/*        itemCost="22.00"*/}
            {/*    />*/}
            {/*</div>*/}

            <CardList />
        </div>
    );
}

export default App;
