import React from "react";
import delivery from "../img/delivery.gif";
import { Link } from "react-router-dom";
const OrderPlaced = () => {
  return (
    <div className="w-full h-[calc(100vh-115px)] flex  flex-col items-center">
      <img className="h-[66%]" src={delivery} />
      <h1 className="font-extrabold text-[2rem]">Order Placed Successfully</h1>
      <Link
        to="/"
        type="button"
        className="bg-gradient-to-br from-orange-400 text-white mt-4 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderPlaced;
