import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage: FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The best classic burgers!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Find the most delicious burgers here at our restaurant.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={500}
                          height={500}
                          src="https://t4.ftcdn.net/jpg/03/89/92/21/360_F_389922112_rz1ZpYYoil18wcKIkK6GF8qeFQH7Xp2E.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={500}
                          height={500}
                          src="data:image/jpeg;base64,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"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={500}
                          height={500}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4DdPALt6w6AIY5zGtQho9lZ8Sz1eKrf4Bg&usqp=CAU"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={500}
                          height={500}
                          src="https://media.istockphoto.com/id/518802156/photo/onion-rings.jpg?s=612x612&w=0&k=20&c=SVVifA9O-1cjBgy9bI-YAhcAAI9ohTv34VmOxhFIMpU="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={500}
                          height={500}
                          src="https://restaurantclicks.com/wp-content/uploads/2023/01/15-Best-Fast-Food-Chicken-Nuggets.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={500}
                          height={500}
                          src="https://t3.ftcdn.net/jpg/02/25/38/48/360_F_225384805_KIrwsW3tikqIL3couTckFgkQ3lxYeZvo.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/menu"
                className="inline-block rounded-md border border-transparent bg-black py-3 px-8 text-center font-medium text-white hover:bg-gray-700"
              >
                Order Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
