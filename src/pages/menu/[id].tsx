"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
import { FC } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://restaurantmenu.cyclic.app/menu");
  const menu = await res.json();

  const paths = menu.map((menuItem: any) => ({
    params: { id: menuItem._id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://restaurantmenu.cyclic.app/menu/${params.id}`
  );
  const data = await res.json();

  return {
    props: { menuItem: data },
  };
};

const MenuItem: FC = ({ menuItem }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="mx-auto mb-28 px-4 w-full max-w-7xl bg-white text-gray-700">
      <div className="flex pt-6">
        <Link
          className="rounded-md bg-black py-3 px-8 text-center font-medium text-white hover:bg-gray-700"
          href="/menu"
        >
          Back to Menu
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* :PICTURES CONTAINER */}
        <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
          {/* ::Main Picture */}
          <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
            <Image
              width={500}
              height={500}
              src={menuItem.img}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* :PRODUCT DETAILS */}
        <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">
          {/* ::Description Container */}
          <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
            {/* :::Name */}
            <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">
              {menuItem.name}
            </h1>
            {/* :::Description */}
            <p className="mt-10 text-base text-gray-500">
              {menuItem.description}
            </p>
          </div>

          {/* ::Customization Container */}
          <div className="order-1 lg:order-2 py-8 sm:px-6">
            {/* :::Name */}
            <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">
              {menuItem.name}
            </h1>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"></div>
          </div>

          {/* ::Actions Container */}
          <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
            {/* :::Price */}
            <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
              <span className="font-normal">£</span>
              {menuItem.price}
            </span>
            {/* :::Add to cart button */}
            <button
              onClick={() => dispatch(addToCart(menuItem))}
              className="flex rounded-md bg-black py-3 px-8 text-center font-medium text-white hover:bg-gray-700"
            >
              <AiOutlineShopping className="mr-3 w-6 h-6" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
