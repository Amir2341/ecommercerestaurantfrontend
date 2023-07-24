import { FC } from "react";
import axios from "axios";

const PayButton: FC = ({ cartItems }: any) => {
  const handleCheckout = async () => {
    axios
      .post(`http://localhost:8000/stripe/create-checkout-session`, {
        cartItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <button
      className="justify-center align-middle rounded-md bg-black py-3 px-8 text-center font-medium text-white hover:bg-gray-700"
      onClick={() => handleCheckout()}
    >
      Checkout
    </button>
  );
};

export default PayButton;
