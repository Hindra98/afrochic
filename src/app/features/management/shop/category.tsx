// import { useState } from "react";
import Sidebar from "../../../components/shared/sidebar/sidebar";
import Card from "../../home/components/card";

const Shop = () => {
  // const [itemsPerPage, setItemsPerPage] = useState(48);
  // const itemsPerPageFromBanner = (itemsPerPage) => {
  //   setItemsPerPage(itemsPerPage);
  // };

  return (
    <div className="max-w-container mx-auto px-4">
      <div className="title text-3xl my-4 mx-4 font-bold relative">
        <h1 className="xmd:fixed top-16 z-10">Nos produits</h1>
      </div>
      <div className="flex flex-row ms-0 xmd:ms-72">
        <div className="sidebar hidden xmd:block">
          <Sidebar open={true} />
        </div>

        <div className="product">
          
          <div className="flex flex-row justify-center flex-wrap gap-4 m-2">
            <Card id={"0"} name="Ecouteurs" price={41} size={186} note="4/5" />
            <Card id={"1"} name="Ecouteurs" price={41} size={186} note="4/5" />
            <Card id={"2"} name="Ecouteurs" price={41} size={186} note="4/5" />
            <Card id={"3"} name="Ecouteurs" price={41} size={186} note="4/5" />
            <Card id={"4"} name="Ecouteurs" price={41} size={186} note="4/5" />
            <Card id={"5"} name="Ecouteurs" price={41} size={186} note="4/5" />
            <Card id={"6"} name="Ecouteurs" price={41} size={186} note="4/5" />
            <Card id={"7"} name="Ecouteurs" price={41} size={186} note="4/5" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;
