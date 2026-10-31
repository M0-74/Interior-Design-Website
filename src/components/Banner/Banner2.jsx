import Banner1 from "../../assets/banner2.png";

const Banner2 = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <div className="flex flex-col gap-6 text-start">
          <h1 className="font-bold text-4xl font-serif">
            Simple way to make stylish living room
          </h1>
          <p className="text-sm text-gray-500 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            earum accusantium tempore nam adipisicing elit. Suscipit earum
            accusantium tempore nam aliquid
          </p>
          <div className="flex  gap-5">
            <p className="text-sm text-gray-500 leading-7 flex flex-col">
              <span className="font-bold text-2xl text-black font-serif">15</span>Years of
              Experience
            </p>
            <p className="flex flex-col text-sm text-gray-500 leading-7">
              <span className="font-bold text-2xl text-black font-serif">360</span>Happy
              Clients
            </p>
            <p className="flex flex-col text-sm text-gray-500 leading-7">
              <span className="font-bold text-2xl text-black font-serif">34</span>Award
              Gained
            </p>
          </div>
          <div>
            <button
              className="text-sm font-semibold lg:text-base border-[1px] border-black
               px-4 py-2 shadow-[5px_5px_0px_0px] bg-black text-white duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c];
            "
            >
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <img src={Banner1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
