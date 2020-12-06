
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'

const initialState={
    products:[
        {id:1 ,name:'man cloth',price:23,pic:img1},
        {id:2 ,name:'kids cloth',price:10,pic:img2},
        {id:3 ,name:'jeans',price:123, pic:img3},
        {id:4 ,name:'t shirt',price:30,pic:img4},
        {id:5 ,name:'sweater',price:43,pic:img1},
        ],

        product: {}
    }
    const ProductReducer=(state=initialState,action)=>{
        switch(action.type){

            case "PRODUCT": 
            return {...state, product: state.products.find(product => product.id === parseInt(action.id))}


            default:
                return state
        }
    }
    export default ProductReducer