import React ,{useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

function ProductDetails() {
    const {id }= useParams();
    // console.log(id)
    const dispatch = useDispatch();
    const {product} = useSelector( state=>state.ProductReducer);
    console.log(product)


    useEffect(() => {
        dispatch({type: 'PRODUCT', id:id})
     }, [id])

    
    return ( 
        <div className="col-md-12 mt-5 mx-auto row">
        <div className="col-md-6">
        <img src={product.pic} width="60%" />
        </div>
        <div className="col-md-5">
        <p>{product.name}</p>
        <p >{product.price}</p>
        </div>
            
        </div>
        
    )
}

export default ProductDetails
