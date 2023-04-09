import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utils/database';
import { CardContext, ProductContext } from '../App';

const Shop = () => {
  const [cart,setCart]  = useContext(ProductContext)
  const Products = useContext(CardContext)
    
    const addToCartHandle = (id) => {
        
        const newCart = cart
        const exist = newCart.find(c => c.id == id)
        
        if(exist){
            exist.quantity = exist.quantity +1
        }else{
            const newProduct = Products.find(pd=> pd.id == id)
            newProduct.quantity = 1
            newCart.push(newProduct)
        }
        setCart(newCart)
        addToDb(id)
        console.log(cart)
      
    }

    const data = useLoaderData()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5'>
            {
                data.map((product, i) => <ProductCard addToCartHandle={addToCartHandle} product={product} key={i}></ProductCard>)
            }
        </div>
    );
};

export default Shop;