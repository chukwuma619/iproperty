import { FormButton } from "@/components/button";
import { FaSearch } from "react-icons/fa";

export default function RentPage() {
  return (
    <>
      <div className="w-full">
        <form
          action=""
          className="w-full relative flex flex-col h-fit items-center justify-center"
        >
          <div className="relative">
            <input
              type="search"
              placeholder="Address, School, City, Zip or Neighborhood"
              name="query"
              className="rounded-full w-96 h-fit  block border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
              id="query"
            />

            <FormButton className="!rounded-full !absolute top-1/2 -mt-5 right-1 !p-2.5 w-fit">
              <span className="sr-only">Search</span>
              <FaSearch className="w-5 h-5" />
            </FormButton>
          </div>
        </form>

        <div className="block mt-4">
          <h2 className="text-xl font-medium text-gray-900">Newest listings</h2>
          <p>See the most up-to-date listings</p>
        </div>
      </div>
    </>
  );
}
