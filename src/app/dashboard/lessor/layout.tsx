"use client";
import Link from "next/link";
import { IoArrowBackOutline, IoMenu, IoClose } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { SidebarLessorData } from "@/data/sidebar";
import { signOutUser } from "@/actions/auth";
import { FaHouseSignal } from "react-icons/fa6";
import Image from "next/image";

export default function DashboardLessorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <header className="shadow py-2 lg:hidden">
        <nav className="flex justify-between items-center container mx-auto px-4">
          <Link
            href={"/"}
            className="flex items-center justify-center text-blue-600 text-2xl font-semibold tracking-tight"
          >
            <FaHouseSignal className="w-10 h-10" />
            <p>IProperty</p>
          </Link>

          <button
            className="p-2.5"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <span className="sr-only">Open Sidebar</span>
            <IoMenu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <div className="container mx-auto">
        <aside
          className={`${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          } ease-linear duration-300 z-50 w-full lg:w-auto lg:translate-x-0 inline-flex inset-y-0 fixed min-h-svh border`}
        >
          <div className="w-72 flex flex-col justify-between shrink-0 bg-white h-full p-6">
            <nav className="space-y-8">
              <Link
                href={"/"}
                className="flex items-center text-blue-600 justify-center text-2xl font-semibold tracking-tight"
              >
                <FaHouseSignal className="w-10 h-10" />
                <p>IProperty</p>
              </Link>

              <div className="flex flex-col gap-3 items-center">
                <Image
                  src={"/Images/profile-image.jpeg"}
                  alt="profile-image"
                  width={56}
                  height={56}
                  className="rounded-full"
                />

                <div className="flex flex-col items-center">
                  <p className="text-sm font-semibold">John Doe</p>
                  <p className="text-xs text-gray-600">
                    20th Street, along Abuja
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {SidebarLessorData.map((nav, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={nav.href}
                        className={`text-sm font-medium rounded-md p-2 flex hover:bg-blue-50 ${
                          pathname === nav.href && "bg-blue-50"
                        }`}
                      >
                        {nav.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <form action={signOutUser}>
              <button className="text-sm font-medium text-red-500 rounded-md p-2 flex hover:bg-gray-100">
                Logout
              </button>
            </form>
          </div>

          <div className="h-full w-full flex items-start justify-end backdrop-blur-sm lg:hidden pr-4 pt-2">
            <button
              className="p-2.5"
              onClick={() => {
                setIsNavOpen(false);
              }}
            >
              <span className="sr-only">Close Sidebar</span>
              <IoClose className="w-6 h-6" />
            </button>
          </div>
        </aside>
        <main className="lg:ml-72 p-4 lg:p-10 bg-gray-50  min-h-svh relative">
          <button
            onClick={() => {
              router.back();
            }}
            aria-label="Go back"
            className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-gary-800/5 ring-1 ring-gray-900/5 transition"
          >
            <IoArrowBackOutline className="h-4 w-4 stroke-gray-500 transition group-hover:stroke-gray-700" />
          </button>
          <div className="">
            <div className="rounded-md border min-h-[65svh] flex p-4 h-full">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
