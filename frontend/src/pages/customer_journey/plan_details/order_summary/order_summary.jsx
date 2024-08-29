import React, { useContext } from 'react'
import style from "./order_summary.module.css"
import { StoreContext } from '../../../../context/StoreContext';
const Order_summary = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  return (
    <div>
      <div className={style.order_summary}>
        <div className={style.head_text}>
            <p>Order Summary
            </p>
        </div>
        <div className={style.order_main}>
            <ul>
                <div className={style.first_list} id = {style.head} >
<li>Items</li>
<li>Quantity</li>
                </div>
                <div>
                  <div className={style.first_list_map}>
                {food_list.map((item,index)=>{
                  if (cartItems[item._id] > 0)
           {
             return(
            <>
            <li>{item.name}</li>
            <li>1</li></>  
            )
          }
        })}
        </div>   
                </div>

             
                {/* <div className={style.first_list} >
<li>Vegan Sandwhich</li>
<li>1</li>
                </div> */}
                <hr />
                <div className={style.first_list}>
<li><b>Total To Pay</b> </li>
<li>552 ₹</li>
                </div>
            </ul>
            <div className={style.strip}>
                <p>Amazing offers awaits at next step!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Order_summary
