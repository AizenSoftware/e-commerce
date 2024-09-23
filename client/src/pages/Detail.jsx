import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../rtk-query/product/productSlice";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetProductsQuery(id);
  const product = data?.products.find((p) => p.id === id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(product);

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 border border-gray-300 p-4">
          <img src="" alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
