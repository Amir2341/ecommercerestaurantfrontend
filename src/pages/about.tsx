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
        <div className="text-3xl">Good Food</div>
        <h2 className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
          possimus ipsam temporibus doloribus beatae saepe eum nesciunt dolorem
          tempore, nemo dolores corporis officiis cumque neque veniam
          distinctio, quae aperiam! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Vel provident error nemo optio sequi nostrum ab quis
          consequuntur, est dolorum corrupti explicabo enim voluptas non quos
          eligendi aliquid ipsum delectus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Asperiores quia inventore vitae labore
          beatae veniam quam minima unde numquam similique non perferendis
          voluptatum porro repellendus obcaecati, dolorum facilis itaque alias.
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
