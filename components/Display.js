
import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const Display = () => {
    const {products}=useSelector(state=>state.ProductReducer)
   // console.log(products)
    return (
        <div className="  col-md-12 row mx-auto"  >
            {products?products.map(element=>(
            <div  className="col-md-3 mt-5 mx-auto" key={element.id}>
               
                   <Link to={`/productdetails/${element.id}`}> 
                   <img src={element.pic} alt="logoname" width="80%" height="70%"/></Link>
                   <div className="row">
                   <p>{element.name}</p>
                   <p >{element.price}</p>
                   </div>
                
            </div>


        ))
        
          :''}
        </div>
    )
}

export default Display
