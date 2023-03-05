export const ItemCounter = ({
  currentValue,
  updatedQuantity,
  maxValue,
  label,
}) => {
  const decrementQuantity = () => {
    if (currentValue <= 1) return;
    const finalQuantity = currentValue - 1;
    updatedQuantity(finalQuantity);
  };
  const incrementQuantity = () => {
    if (currentValue >= maxValue) return;
    const finalQuantity = currentValue + 1;
    updatedQuantity(finalQuantity);
  };
  return (
    <div className="flex justify-center py-3 md:justify-start items-center text-lg w-full">
      {label && <strong className="mr-3 ">Cantidad: </strong>}

      <button className="add-button text-pink-400" onClick={decrementQuantity}>
        <i className="ri-indeterminate-circle-line md:text-lg text-2xl"></i>
      </button>
      <div className="p-2 mx-2 w-10 h-10 flex justify-center items-center text-pink-500 font-bold text-lg rounded-full md:text-lg text-4xl">
        <p className="md:text-lg text-2xl">{currentValue}</p>
      </div>
      <button className="add-button text-pink-400" onClick={incrementQuantity}>
        <i className="ri-add-circle-line md:text-lg text-2xl"></i>
      </button>
    </div>
  );
};
