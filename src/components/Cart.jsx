import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { clearCart, getDB, removeDB } from '../Utils/database';
import CartItem from './Cards/CartItem';
import { ProductContext } from '../App';

const Cart = () => {
    const {data} = useLoaderData()
    const [cart,setCart] = useContext(ProductContext)


console.log(cart)
    const handleRemove = id => {
        removeDB(id)
        const newCart = cart.filter(c=> c.id != id)
        setCart(newCart)
        console.log(newCart)
      
    }
    const clearCartHandle = ()=> {
        clearCart()
        setCart([])
    }
  
    return (
        <div>
           <h2 className='text-2xl font-bold text-center'>{cart.length  ?'Review Cart Items':'Cart is empty'}</h2>
           <div className='flex min-h-screen flex-col max-w-3xl p-10 mx-auto'>

            {
                cart.map((product,i)=> <CartItem key={i}  handleRemove={handleRemove} product={product}></CartItem> )
            }
            <div className='text-right'>
            <h3 className='text-xl'>Total amount: <span className='font-bold'>{cart.reduce((a,c)=> (c.price*c.quantity) + a,0)}$</span></h3>
            <h3> Not including taxes and shipping costs</h3>
            </div>
            <div className='flex flex-row-reverse mt-10'>
                
                <button className='btn-primary'>Place Order</button>

                {cart.length ? <button className='btn-outlined' onClick={clearCartHandle}>Clear Cart</button> : <Link to='/shop'><button className='btn-outlined' >Back to Shop</button></Link>}

            </div>

           </div>



        </div>
    );
};

export default Cart;