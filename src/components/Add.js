const labels = ["Today's Deals", "New Products", "Seller", "Home", "Coupons"];

const Add = () => {
  return (
    <div className="bg-[#232f3e]">
      <div className="flex-between h-8 sm:max-w-[80vw] md:max-w-[80vw] lg:max-w-[55vw] mx-auto sm:px-10 text-[15px] sm:text-base">
        {labels.map((label) => {
          return (
            <div className="group whitespace-nowrap">
              <a
                href="#"
                className="text-gray-200/70 hover:text-white px-[0.7rem]"
              >
                {label}
              </a>
              <div className="h-[2px] w-full group-hover:bg-white duration-100 ease-out"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Add;
