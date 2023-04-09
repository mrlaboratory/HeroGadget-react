import React, { createContext, useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Footer from './components/Footer';


export const ProductContext = createContext([])
export const CardContext = createContext([])

const App = () => {
  const { productList, data } = useLoaderData()
  const [cart,setCart]  = useState(productList)

  const loc = useLocation()
  useEffect(() => {
    console.log(loc)
  }, [loc.pathname])

 
  console.log(productList)


  return (
    <div className='container mx-auto'>
      <ProductContext.Provider value={[cart,setCart]}>
        <CardContext.Provider value={data}>
          <Header></Header>
          <div className='min-h-[calc(100vh-156px)]'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </CardContext.Provider>

      </ProductContext.Provider>


    </div>
  );
};

export default App;