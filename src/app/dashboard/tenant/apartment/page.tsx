import { Button } from "@/components/button";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { FaBed, FaBath, FaRepeat } from "react-icons/fa6";
import { TbRulerMeasure, TbNumber } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
export default function DashboardHome() {
  return (
    <>
      <div className="h-full w-full flex flex-col gap-8 md:gap-12">
        <div className="flex justify-end items-end">
          <Button className="!px-4">Rent Apartment</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg p-4 flex flex-col shadow-md">
            <div className="relative">
              <Image
                src={"/Images/property-1.jpg"}
                alt=""
                width={250}
                className="rounded-lg"
                height={150}
              />
              <div className="bg-blue-600 text-xs font-medium inline-block text-white p-1 absolute z-10 rounded-e-lg right-0 top-0">
                N200,000/yr
              </div>
            </div>

            <div className="py-4">
              <h3 className="text-gray-900 font-medium">3298 Galaxy way</h3>
              <p className="text-sm text-gray-600">M5, Ibadan Nigeria</p>
              <div className="w-full mt-3 flex text-xs text-gray-600 items-center justify-between">
                <div className="flex items-center gap-1">
                  <TbNumber />
                  <p>2</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaBed />
                  <p>4</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaBath />
                  <p>3</p>
                </div>

                <div className="flex items-center gap-1">
                  <TbRulerMeasure />
                  <p>1906fts</p>
                </div>
              </div>

              <Button className="mt-6 !w-full !gap-2">
                <BiDetail /> Details
              </Button>

              <p className="text-xs text-gray-500">
                Your rent expires <time>20/12/24</time>
              </p>
            </div>
          </div>

          <div className="rounded-lg p-4 flex flex-col shadow-md">
            <div className="relative">
              <Image
                src={"/Images/property-1.jpg"}
                alt=""
                width={250}
                className="rounded-lg"
                height={150}
              />
              <div className="bg-blue-600 text-xs font-medium inline-block text-white p-1 absolute z-10 rounded-e-lg right-0 top-0">
                N200,000/yr
              </div>
            </div>

            <div className="py-4">
              <h3 className="text-gray-900 font-medium">3298 Galaxy way</h3>
              <p className="text-sm text-gray-600">M5, Ibadan Nigeria</p>
              <div className="w-full mt-3 flex text-xs text-gray-600 items-center justify-between">
                <div className="flex items-center gap-1">
                  <TbNumber />
                  <p>2</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaBed />
                  <p>4</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaBath />
                  <p>3</p>
                </div>

                <div className="flex items-center gap-1">
                  <TbRulerMeasure />
                  <p>1906fts</p>
                </div>
              </div>

              <Button className="mt-6 !w-full !gap-2">
                <BiDetail /> Details
              </Button>

              <p className="text-xs text-gray-500">
                Your rent expires <time>20/12/24</time>
              </p>
            </div>
          </div>

          <div className="rounded-lg p-4 flex flex-col shadow-md">
            <div className="relative">
              <Image
                src={"/Images/property-1.jpg"}
                alt=""
                width={250}
                className="rounded-lg"
                height={150}
              />
              <div className="bg-blue-600 text-xs font-medium inline-block text-white p-1 absolute z-10 rounded-e-lg right-0 top-0">
                N200,000/yr
              </div>
            </div>

            <div className="py-4">
              <h3 className="text-gray-900 font-medium">3298 Galaxy way</h3>
              <p className="text-sm text-gray-600">M5, Ibadan Nigeria</p>
              <div className="w-full mt-3 flex text-xs text-gray-600 items-center justify-between">
                <div className="flex items-center gap-1">
                  <TbNumber />
                  <p>2</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaBed />
                  <p>4</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaBath />
                  <p>3</p>
                </div>

                <div className="flex items-center gap-1">
                  <TbRulerMeasure />
                  <p>1906fts</p>
                </div>
              </div>

              <Button className="mt-6 !w-full !gap-2">
                <BiDetail /> Details
              </Button>

              <p className="text-xs text-gray-500">
                Your rent expires <time>20/12/24</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
