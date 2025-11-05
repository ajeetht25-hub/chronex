import React from "react";

import Customization from "./components/Customization";
import { getWatchData } from "../_actions/fetch";
import Navbar from "../_components/layout/Navbar";

const page = async () => {
  const { materials, dials, images } = await getWatchData();

  return (
    <>
      <Customization materials={materials} dials={dials} images={images} />
    </>
  );
};

export default page;
