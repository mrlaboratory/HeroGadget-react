const getDB = () => {
    let cart = localStorage.getItem('cart-data')
    return (cart ? JSON.parse(cart) : {})
}
const addToDb = id => {
    const d = getDB()
    const quantity = d[id]
    quantity ? d[id] = quantity + 1 : d[id] = 1
    localStorage.setItem('cart-data', JSON.stringify(d))
}

const removeDB = id => {
    const d = getDB()
    if(d.hasOwnProperty(id)){
        delete d[id]
        localStorage.setItem('cart-data', JSON.stringify(d))
    }
     

}
const clearCart = ()=> localStorage.removeItem('cart-data')


export { addToDb, getDB, removeDB, clearCart }