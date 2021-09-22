import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';
import Success from './components/Success';

function App() {
  return (
     <Router>
        <div className="container">		
            <Header />			
            <Switch>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
               <Route path="/success" exact component={Success} />
            </Switch>
        </div>
     </Router>
  );
}

export default App;
