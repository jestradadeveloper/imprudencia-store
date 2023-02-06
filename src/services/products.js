import { products } from '../data/products'

const getAll = () => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(products)
    },2000)
  })
}
const getProductById = (id) => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(products[id])
    },2000)
  })
}
const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(products.filter(product=> product.category === category))
    },2000)
  })
}
export const productsService = { getAll, getProductById, getProductsByCategory }
