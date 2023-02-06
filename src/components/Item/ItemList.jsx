
import { Item } from "./Item"
import { productsService } from "../../services/products";
import { useState, useEffect } from "react";
export const ItemList= ({productsId}) => {
  const [ products, setProduct ] = useState([])
  useEffect(() => {
    if (productsId !== undefined){
      productsService.getProductsByCategory(productsId).then(response=> setProduct(response))
    }else{
      productsService.getAll().then(response=> setProduct(response))
    }
    
  }, [productsId])
  return (
    products.length === 0 ? <>Cargando...</> : ( products.map(product => <Item key={product.id} product={product}/>))
  )
}
