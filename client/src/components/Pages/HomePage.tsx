import Hero from "../Hero";
import landingImg from "../../assets/landing.png";
import appDownloadImg from "../../assets/appDownload.png";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-12" data-aos="fade-up" >
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-6 border">
          <h1 className="text-4xl font-bold tracking-tight text-pink-500">
            Hungry? Search right down there
          </h1>
          <span className="text-xl font-semibold">
            Food is just a Click away
          </span>
          {/* Search Box and Button */}
          <div className="w-full max-w-md mx-auto mt-6 flex">
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={landingImg}
            alt="landing_img"
            className="h-auto md:h-[600px]"
          />
          <div className="mb-5 flex flex-col items-center justify-center gap-4 text-center">
            <span className="text-3xl font-bold tracking-tighter">
              Order Takeaway even faster!
            </span>
            <span>
              Download the PandaFood for faster orders and suggestions
            </span>
            <img src={appDownloadImg} alt="appDownloadImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
