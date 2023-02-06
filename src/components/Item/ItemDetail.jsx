import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { productsService } from "../../services/products";

export const ItemDatail = () => {
  const [ product, setProduct ] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    productsService.getProductById(productId).then(response=> setProduct(response))
  }, [productId]);
  if(product == null) return;
  return(
    <div className="mx-auto mt-10 w-10/12">
    <div className="flex">
        <div className="w-6/12">
          <img src={product.pictureUrl } alt={product.title} className="w-full"/>
        </div>
        <div className="w-6/12 p-10">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <div className="flex flex-col divide-y mt-4">
            <div className="py-3">
              <strong>Precio:</strong>
              <p>{product.price}</p>
            </div>
            <div className="py-3">
              <strong>Description:</strong>
              <p>{product.description}</p>
            </div>
            <div className="py-3">
              <button className="bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
                Agregar al carrito
              </button>
            </div>
          </div> 
        </div>
    </div>
    
    </div>
  )
}
