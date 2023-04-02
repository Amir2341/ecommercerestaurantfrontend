import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

const Navbar: FC = () => {
  const cart = useSelector((state: any) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <nav className="sticky p-5 bg-black  shadow md:flex md:items-center md:justify-between">
      <div>
        <span className="text-2xl font-bold text-white cursor-pointer">
          <Link href="/">
            <Image
              width={50}
              height={50}
              className=" inline h-auto w-auto"
              src="https://media.istockphoto.com/id/969465446/photo/big-tasty-hamburger-or-cheeseburger-isolated-on-black-background-with-grilled-meat-cheese.jpg?s=612x612&w=0&k=20&c=2xGWYO4xRAtD-3od12vWeWfzLN5FZWbE55KIl9RHFnk="
              alt="burger-logo"
            ></Image>
          </Link>
          <Link href="/">StackBurger</Link>
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static  bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-1 pl-7 md:opacity-100 top-[-400px] transition-all ease-in duration-500">
        <li className="text-1xl font-normal text-white cursor-pointer hover:text-gray-600 duration-500 mx-4 my-6 md:my-6">
          <Link href="/">HOME</Link>
        </li>
        <li className="text-1xl font-normal text-white cursor-pointer hover:text-gray-600 duration-500 mx-4 my-6 md:my-6">
          <Link href="/menu">MENU</Link>
        </li>
        <li className="text-1xl font-normal text-white cursor-pointer hover:text-gray-600 duration-500 mx-4 my-6 md:my-6">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="text-1xl font-normal text-white cursor-pointer hover:text-gray-600 duration-500 mx-4 my-6 md:my-6">
          <Link href="/cart">
            <p>
              <ShoppingBagIcon className="w-5 h-5   md:w-5 md:h-5" /> (
              {getItemsCount()})
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
