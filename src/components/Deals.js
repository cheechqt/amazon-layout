import { headphones, laptop, phone, smartphone } from "../assets";
import Product from "./Product";

const Deals = () => {
  const products = [
    { title: "Headphones", image: headphones },
    { title: "Laptop", image: laptop },
    { title: "Phone", image: phone },
    { title: "Smartphone", image: smartphone },
  ];
  return (
    <div className="bg-[#eaeded]  w-full">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto w-[80vw] xl:w-[70vw] gap-5">
        {products.map((product) => (
          <Product title={product.title} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
