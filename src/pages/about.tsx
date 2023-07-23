import { FC } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiHome } from "react-icons/hi";

const About: FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col justify-center items-center bg-slate-800 text-white p-8 gap-5 ">
        <h1 className="text-7xl">About</h1>
      </div>
      <div className="flex flex-col justify-between items-start p-6 gap-5">
        <div className="text-3xl">
          Welcome to StackBurger - Your Fast Food Destination!
        </div>
        <h2 className="text-2xl">
          At StackBurger, we serve mouthwatering, high-quality meals with
          lightning-fast service. From flame-grilled burgers to crispy chicken
          nuggets and onion rings, there is something for everyone. Join us for
          a delightful dining experience and discover fast food redefined!
        </h2>
      </div>
      <div className="flex flex-col justify-between items-start p-6 gap-5">
        <div className="text-3xl">Contact</div>
        <ul className="md:flex-auto">
          <li>
            <p className="mb-4 flex items-center justify-center md:justify-start gap-5">
              <HiHome />
              New York, NY 10012, US
            </p>
          </li>
          <li>
            <p className="mb-4 flex items-center justify-center md:justify-start gap-5">
              <MdEmail />
              info@example.com
            </p>
          </li>
          <li>
            <p className="mb-4 flex items-center justify-center md:justify-start gap-5">
              <BsTelephoneFill /> + 01 234 567 88
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
