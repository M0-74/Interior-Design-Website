import Banner1 from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <div>
          <img src={Banner1} alt="" />
        </div>
        <div className="flex flex-col gap-6 text-start">
          <h1 className="font-bold text-4xl font-serif">
            We Believe that a team makes any project better
          </h1>
          <p className="text-sm text-gray-400 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            earum accusantium tempore nam aliquid
          </p>
          <div>
            <button
              className="text-sm font-semibold lg:text-base border-[1px] border-black px-4 py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c];
            "
            >
              Discover Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
