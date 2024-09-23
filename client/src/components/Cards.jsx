import React from "react";
import { useGetProductsQuery } from "../rtk-query/product/productSlice";
import Card from "./Card";
import { Navigate } from "react-router-dom";
const Cards = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  if (isLoading)
    return (
      <p className="flex items-start justify-center h-screen">Loading...</p>
    );
  if (error)
    return (
      <p className="flex items-center justify-center h-screen">Error:{error}</p>
    );
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-stretch gap-4">
      {data.products?.slice(0, 8).map((product) => (
        <ul key={product.id}>
          <Card product={product} />
        </ul>
      ))}
    </div>
  );
};

export default Cards;
