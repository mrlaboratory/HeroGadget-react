import { getDB } from "./database"


export const getSavedProducts = async () => {
    console.log('test')
    const cart = getDB()
    const res = await fetch('products.json')
    const data = await res.json()
    const productList = []
    for (const id in cart) {
        const savedProduct = data.find(pd => pd.id === id)
        if (savedProduct) {
            savedProduct.quantity = cart[id]
            productList.push(savedProduct)
        }
    }
    // console.log(productList)
    return {productList , data}

}


