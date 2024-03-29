"use client";

import { Button, FormButton } from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBath, FaBed, FaSearch } from "react-icons/fa";
import {
  FaHouseSignal,
  FaAngleDown,
  FaRegCircleUser,
  FaCircleUser,
} from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";

export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  return (
    <>
      <header className="w-full py-2">
        <nav className="flex justify-between items-center px-4">
          <Link
            href={"/"}
            className="flex items-center justify-center text-blue-600 text-lg font-semibold tracking-tight"
          >
            <FaHouseSignal className="w-6 h-6" />
            <p>IProperty</p>
          </Link>

          <ul className="flex h-full text-gray-500 font-medium items-center gap-3">
            <li>
              <Link
                href={"/"}
                className="py-2 px-3 rounded-full hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="py-2 px-3 rounded-full hover:text-gray-900"
              >
                Manage Rentals
              </Link>
            </li>

            <li>
              <Link
                href={"/"}
                className="py-2 px-3 rounded-full hover:text-gray-900"
              >
                About
              </Link>
            </li>
          </ul>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
              }}
              className="rounded-full hover:shadow-lg flex gap-2 py-1.5 px-2 items-center border border-gray-500"
            >
              <span className="sr-only">Profile</span>
              <FaAngleDown aria-hidden />
              <FaCircleUser aria-hidden className="h-8 w-8" />
            </button>

            <div
              className={`rounded-lg bg-white shadow ${
                isProfileOpen ? "absolute" : "hidden"
              }  right-4 top-full mt-2 z-10`}
            >
              <ul className="flex flex-col gap-3 text-gray-500 w-52 py-2 font-medium ">
                <li className="hover:bg-gray-50 px-3 py-2 relative h-fit">
                  <Link href={"/Register"} className="py-2 h-full w-full">
                    Sign up
                  </Link>
                </li>
                <li className="hover:bg-gray-50 px-3 py-2 relative h-fit">
                  <Link href={"/Login"} className="py-2 h-full w-full">
                    Login
                  </Link>
                </li>

                <li className="hover:bg-gray-50 px-3 py-2 relative h-fit">
                  <Link href={"/Login"} className="py-2 h-full w-full">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="">
        <div className="bg-[url('/postive-caring-relationships-teachers.png')] bg-cover flex flex-col gap-5 items-center py-12 md:py-28">
          <h1 className="text-center text-5xl text-white font-semibold max-w-lg">
            Discover your perfect fit, fearlessly.
          </h1>
          <p className="text-white max-w-2xl text-center">
            We provide you with the best housing deals at the most affordable
            rates with no hassles and full transparency and access to the home
            owners.
          </p>
          <form action="" method="get">
            <div className="relative">
              <input
                type="search"
                placeholder="Address, School, City, Zip or Neighborhood"
                name="query"
                className="rounded-full w-96 h-fit  block border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                id="query"
              />

              <FormButton className="!rounded-full !absolute top-1/2 -mt-5 right-1 !p-2.5 !w-fit">
                <span className="sr-only">Search</span>
                <FaSearch className="w-5 h-5" />
              </FormButton>
            </div>
          </form>
        </div>

        <div className="container mx-auto mt-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
            <Link href={"/"} className="rounded-2xl shadow-md hover:shadow-xl">
              <div className="h-52 rounded-t-2xl">
                <Image
                  src={"/Images/property-1.jpg"}
                  height={197}
                  width={296}
                  alt=""
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-gray-900 font-medium">
                  3 Bedroom Bungalow
                </h3>
                <p className="text-sm text-gray-600">Abuja, Garki (Area 7)</p>

                <h4 className="text-sm font-medium">N200,000/yr</h4>
              </div>
            </Link>
          </div>

          <div className="flex items-center mt-8 gap-3 justify-center flex-col">
            <p className="font-medium text-lg">Continue Exploring</p>
            <Button>Show More</Button>
          </div>
        </div>
      </main>

      <footer className="mt-4">
        <div className="container mx-auto px-4">
          <p className="text-base text-center">
            Made with love by group 24. ©2024 ❤️
          </p>
        </div>
      </footer>
    </>
  );
}
