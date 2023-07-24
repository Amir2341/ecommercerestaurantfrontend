import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Link from "next/link";
import { FC } from "react";
import PayButton from "./paybutton";
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";

const CartPage: FC = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="p-2  text-center pb-[29rem]">
      {cart.length === 0 ? (
        <div className="flex flex-col gap-5 pt-14">
          <h1>Your Cart is Empty!</h1>
          <div className="pt-20">
            <Link
              className="rounded-md bg-black py-3 px-8 text-center font-medium text-white hover:bg-gray-700"
              href="/menu"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      ) : (
        <>
          {cart.map((item: any) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b-2 py-4"
            >
              <div className="w-auto h-auto rounded-md object-cover">
                <Image src={item.img} alt="" height={90} width={65} />
              </div>
              <p>{item.name}</p>
              <p>£ {item.price}</p>
              <p>{item.quantity}</p>
              <div className="w-[25] h-[30]  fill-white border-none m-[0.5] text-xl">
                <button onClick={() => dispatch(incrementQuantity(item._id))}>
                  <GrAdd />
                </button>
                <button onClick={() => dispatch(decrementQuantity(item._id))}>
                  <AiOutlineMinus />
                </button>
                <button onClick={() => dispatch(removeFromCart(item._id))}>
                  <RiDeleteBin6Fill />
                </button>
              </div>
              <p>£ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: £ {getTotalPrice().toFixed(2)}</h2>
          <div>
            <PayButton cartItems={cart} />
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
