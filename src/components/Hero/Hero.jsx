import HeroPng from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:min-h-[600px] gap-10">
        <div className="flex flex-col justify-center gap-8 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
          <h1 className="text-4xl font-serif font-bold">
            SKETCH LUXURY INTERIOR DESIGN
          </h1>
          <p className="text-sm text-gray-500 ">
            Bring your dream to life with one-on-one design help & hand picked
            products tailored to your style, space and budget.
          </p>
          <div className="flex justify-center items-center gap-6 md:flex-row">
            <button
              className="text-sm font-semibold lg:text-base border-[1px] border-black px-4 py-2 
                 hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c] uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Get Start
            </button>
            <button
              className="text-sm font-semibold lg:text-base border-[1px] border-black px-4 py-2 shadow-[5px_5px_0px_0px]
                 hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c];
"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <img src={HeroPng} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
