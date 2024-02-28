import useCart from "@/hooks/useCart";
import { formatter } from "@/lib/utils";

const ShoppingCard = () => {
  const { items, removeItem } = useCart();

  // callculating all the prices from the useCart().items
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="flex flex-col gap-y-4 w-[343px]">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {/* moked orders */}
      {items.map((item, i) => (
        <div key={i} className="flex flex-wrap gap-6 w-full relative">
          <img src={item.image} alt="cart" width={100} />
          <div className="flex flex-col space-y-1">
            <h1 className="text-xl font-bold">
              x{item.quantity} {item.name}
            </h1>
            <span className="text-xs">Quantity: {item.quantity}</span>
            <div className="text-md font-bold">
              {formatter.format(item.price)}
            </div>
          </div>
          <div
            onClick={() => removeItem(item.name)}
            className="span absolute bottom-5 right-3 cursor-pointer underline"
          >
            Remove
          </div>
          <hr className="w-full h-[0.5px] bg-zinc-600" />
        </div>
      ))}
      {/*  */}

      <div className="flex flex-col space-y-4">
        {/* <div className="flex justify-between text-sm w-full">
          <span>Subtotal</span>
          <span>{formatter.format(0)}</span>
        </div> */}
        <div className="flex justify-between text-sm w-full">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <hr className="w-full h-1 bg-zinc-600" />
        <div className="flex justify-between text-sm w-full">
          <span>Total</span>
          <span>{formatter.format(Number(totalPrice))}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
