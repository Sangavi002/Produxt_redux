import React,{ useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { fetchProduct,fetchProductAsec,fetchProductDesc } from "./store/action";
import "./App.css"

export const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector(state => state);
  
  useEffect(() => {
    dispatch(fetchProduct())
  },[])

  const handleAsec = () => {
    dispatch(fetchProductAsec())
  }

  const handleDesc = () => {
    dispatch(fetchProductDesc())
  }
  return(
   <div>
    <h1>Product</h1>
    <div>
      <button onClick={handleAsec}>Asec</button>
      <button onClick={handleDesc}>Desc</button>
    </div>
    <div>
      {productData.isLoading ? 'Loading ...' :
      <div className='container'>
        {productData.product.map((ele) => (
          <div key={ele.id} className='card'>
            <div className='card_img'>
              <img src={ele.image} alt={ele.title} width='100%' height='170px'/>
            </div>
            <h4>{ele.title}</h4>
            <h5>₹ {ele.price}</h5>
          </div>
        ))}
      </div>
      } 
    </div>
   </div>
  )
}