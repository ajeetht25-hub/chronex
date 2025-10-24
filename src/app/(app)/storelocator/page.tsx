import { fetchLocation } from "../_actions/fetch";
import Navbar from "../_components/layout/Navbar";
import StoreLocatorMap from "./_components/StoreLocatorMap";

export default async function Page() {
  const fetchLocations = await fetchLocation();

  return (
    <div className="bg-black xl:container xl:mx-auto">
      <Navbar />
      <div className="flex justify-center items-center pb-10 px-4 flex-col gap-5">
        <h2 className="lg:text-6xl text-2xl text-white text-center lg:w-1/2 font-bold">
          FIND OUR STORE NEAR YOU
        </h2>
      </div>
      <div className="w-full h-[30rem] lg:h-[40rem] px-4">
        <StoreLocatorMap shopPlaces={fetchLocations} />
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
