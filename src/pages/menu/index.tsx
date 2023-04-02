import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://restaurantmenu.cyclic.app/menu");
  const data = await res.json();
  return {
    props: { menuItems: data },
  };
};

const Menu: FC = ({ menuItems }: any) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {menuItems.map((menuItem: any) => (
            <div key={menuItem._id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <Image
                  priority
                  src={menuItem.img}
                  alt=""
                  height={500}
                  width={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/menu/${menuItem._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {menuItem.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  £{menuItem.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
