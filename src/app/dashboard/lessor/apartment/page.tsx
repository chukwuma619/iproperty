import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export default function DashboardHome() {
  return (
    <>
      <div className="h-full w-full flex flex-col gap-8 md:gap-12 justify-center items-center">
        <h1 className="text-gray-900 text-2xl md:text-3xl font-bold leading-none">
          I am a
        </h1>
        <div className="flex flex-col w-full items-center justify-center md:flex-row gap-5">
          <Link
            href={"/dashboard/"}
            className="flex flex-col items-center gap-4 justify-center bg-white border border-gray-300 rounded-lg w-80 h-44"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#9597A8"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  d="M0 33.35s.484-3.62 4.585-5.069c4.102-1.448 7.258-1.884 7.258-1.884l1.411-2.09s.049 1.602 1.842 2.438c1.793.837 2.76 1.22 2.76 1.22l-2.265 4.861-4.268-5.807M35.649 33.35s-.484-3.62-4.586-5.069c-4.102-1.448-6.353-1.884-6.353-1.884l-1.412-2.09s-.049 1.602-1.841 2.438c-1.794.837-2.761 1.22-2.761 1.22l1.955 4.861 4.985-5.853M27.42 9.89l-3.129.575.274-3.066c-1.302.882-2.895.594-5.676-.5-1.434-.564-3.02-1.705-5.044-1.091-2.013.61-1.346 2.51-1.346 2.51l.376 1.741-3.643-1.092"
                  transform="translate(2 3)"
                />
                <path
                  d="M18.407 24.603s2.164.121 3.537-1.649c1.861-2.4 3.296-6.432 3.296-6.432s1.77.683 2.975-2.452c1.206-3.136-.844-3.698-.844-3.698S28.899 0 19.45 0C10.005 0 9.2 5.99 9.2 7.92c0 1.93.282 2.573.282 2.573s-1.596.427-.523 4.18c.714 2.495 2.493 1.93 2.493 1.93s1.753 4.593 3.658 6.633c1.39 1.488 3.297 1.367 3.297 1.367z"
                  transform="translate(2 3)"
                />
              </g>
            </svg>
            <h2 className="text-lg font-semibold">
              Landlord or Property Manager
            </h2>
          </Link>

          <Link
            href={"/dashboard/"}
            className="flex flex-col items-center gap-4 justify-center bg-white border border-gray-300 rounded-lg w-80 h-44"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#9597A8"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  d="M29.818 34.833c-.135-1.498-.54-6.178-3.403-7.703l-5.546-2.297s-2.055 2.424-6.126 2.424c-4.07 0-6.371-2.223-6.371-2.223L3.403 27.13l4.969-2.096c-1.481.524-3.433 1.28-4.969 2.096C.54 28.655.135 33.335 0 34.833M22.743 12.682c0 5.42-3.5 9.818-7.83 9.818-3.522 0-6.51-2.92-7.5-6.932 0 0-.01-.011-.01-.034-.205-.909-.33-1.864-.33-2.852 0-1.227.181-2.398.511-3.477 3.545-.523 5.16-3.08 5.16-3.08 2.874 2.455 8.42 1.568 8.863 1.489.727 1.477 1.136 3.216 1.136 5.068z"
                  transform="translate(5 3)"
                />
                <path
                  d="M7.402 15.534c-.216-.511-2.295-5.773-1.057-10.08C7.652.92 11.391 2.42 11.391 2.42c-1.012-3.431 8.875-3.454 11.08 1.49 2.158 4.84.01 11.283.01 11.283"
                  transform="translate(5 3)"
                />
              </g>
            </svg>
            <h2 className="text-lg font-semibold">Tenant</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
