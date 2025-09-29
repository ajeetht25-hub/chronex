import StoreLocator from '@/app/(app)/storelocator/_components/StoreLocatorMap';
import { ShopLocation } from '@/payload-types';
import React from 'react'

const ShopMap = ({shopPlaces}: {shopPlaces: ShopLocation['locations']}) => {
  return (
    <div className="bg-black xl:container xl:mx-auto py-10">
      <div className="flex justify-center items-center pb-10 px-4">
        <h2 className="lg:text-6xl text-2xl text-white text-center lg:w-1/2 font-bold">
          FIND OUR STORE NEAR YOU
        </h2>
      </div>
      <div className="w-full h-[30rem] lg:h-[40rem] px-4">
        <StoreLocator shopPlaces={shopPlaces} />
      </div>
    </div>
  )
}

export default ShopMap