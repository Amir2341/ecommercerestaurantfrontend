import { FC } from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer: FC = () => {
  return (
    <footer className="sticky bg-black text-center text-white dark:bg-black dark:text-white lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-black lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center gap-5">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <p>Order now for delivery within 30 minutes!</p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <Link className="text-white dark:text-neutral-200" href="/">
                Home
              </Link>
            </p>
            <p className="mb-4">
              <Link className="text-white dark:text-neutral-200" href="/menu">
                Menu
              </Link>
            </p>
            <p className="mb-4">
              <Link className="text-white dark:text-neutral-200" href="/about">
                About
              </Link>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start gap-5">
              <AiOutlineHome />
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start gap-5">
              <AiOutlineMail />
              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start gap-5">
              <BsTelephone />+ 01 234 567 88
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
