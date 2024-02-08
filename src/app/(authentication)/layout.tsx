import { FaHouseSignal } from "react-icons/fa6";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container mx-auto px-4 flex flex-col gap-6 min-h-svh justify-center items-center">
        <div className="flex items-center justify-center text-blue-600 text-2xl font-semibold tracking-tight">
          <FaHouseSignal className="w-10 h-10" />
          <p>IProperty</p>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-[28rem] p-4 md:p-8 bg-white rounded-lg shadow space-y-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
