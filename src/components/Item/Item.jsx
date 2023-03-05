import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg w-full md:w-4/12 px-4 mb-2">
        <img className="w-full" src={product.image.url} alt={product.name} />
        <div className="px-3 py-4 flex flex-col flex-wrap justify-center text-center">
          <div className="flex items-center w-full justify-start flex-wrap flex-col">
            <div className="font-bold text-xl mb-2 w-full">{product.name}</div>
            <div className="w-full flex flex-col items-center justify-center my-2">
              <strong>Categoria</strong>
              <span className="text-pink-300 font-bold text-lg">
                {product.category.name}
              </span>
              <strong>Precio:</strong>
              <span>{product?.price}</span>
            </div>
          </div>

          <Link
            to={`/${product.category.slug}/${product.slug}`}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    </>
  );
};
