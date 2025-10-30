import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import CardV2 from './components/CardV2';
import CardV3 from './components/CardV3';
import CardList from './components/CardListSearch';
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App Container">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">AOWebApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            <Link className="nav-link" to="/Contact">Contact</Link>
                            <Link className="nav-link" to="/Products">Products</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
