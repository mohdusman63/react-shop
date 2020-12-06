 import React from 'react'
import {Provider} from 'react-redux'
import store from './store/Reducer/index'
import Display from './components/Display'
import ProductDetails from './components/ProductDetails'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import {  BrowserRouter,Switch, Route } from 'react-router-dom';



function App() {

  return (


<BrowserRouter>
<Provider store={store}>
<Switch>

<Route exact path='/' component={Display} />
<Route exact path='/productdetails/:id' component={ProductDetails} />



</Switch>
</Provider>
</BrowserRouter>












   
    
  );
}

export default App;
