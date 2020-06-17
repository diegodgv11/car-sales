import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
}
from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Buyers from './pages/Buyers';
import Vehicles from './pages/Vehicles';
import DeleteBuy from './pages/delete/DeleteBuy';
import DeleteBuyers from './pages/delete/DeleteBuyers';
import DeleteVehicles from './pages/delete/DeleteVehicles';
import 'sanitize.css';
import 'material-icons'
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/buy" component={Buy}/>
                <Route exact path="/buyers" component={Buyers}/>
                <Route exact path="/vehicles" component={Vehicles}/>
                <Route exact path="/delete/buys" component={DeleteBuy}/>
                <Route exact path="/delete/buyers" component={DeleteBuyers}/>
                <Route exact path="/delete/vehicles" component={DeleteVehicles}/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);