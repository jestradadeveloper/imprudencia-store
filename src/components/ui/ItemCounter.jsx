export const ItemCounter = ({ currentValue, updatedQuantity, maxValue }) => {
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
    <div className="flex justify-start items-center text-lg">
      <strong className="mr-3 ">Cantidad: </strong>
      <button className="add-button text-pink-400" onClick={decrementQuantity}>
        <i className="ri-indeterminate-circle-line"></i>
      </button>
      <div className="p-2 mx-2 w-10 h-10 flex justify-center items-center text-pink-500 font-bold text-lg rounded-full">
        {currentValue}
      </div>
      <button className="add-button text-pink-400" onClick={incrementQuantity}>
        <i className="ri-add-circle-line"></i>
      </button>
    </div>
  );
};
