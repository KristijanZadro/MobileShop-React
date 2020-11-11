import React from 'react';
import {Switch, Route} from 'react-router-dom'
//components
import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import ListContainer from './components/ListContainer';
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={ListContainer} exact />
        <Route path="/details/:id" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
        <Route component={Default} />
      </Switch>
      <Modal />
      
    </div>
  );
}

export default App;
