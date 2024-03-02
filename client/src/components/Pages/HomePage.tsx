import Hero from "../Hero";
import landingImg from "../../assets/landing.png";
import appDownloadImg from "../../assets/appDownload.png";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-6 border">
          <h1 className="text-5xl font-bold tracking-tight text-pink-500">
            Hungry? Search right down there
          </h1>
          <span className="text-xl font-semibold">
            Food is just a Click away
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={landingImg}
            alt="landing_img"
            className="h-auto md:h-[600px]"
          />
          <div className="mb-5 flex flex-col items-center justify-center gap-4 text-center">
            <span className="text-3xl font-bold tracking-tighter">
              Order Takeway even faster!
            </span>
            <span>Download the PandaFood for faster order and suggestions</span>
            <img src={appDownloadImg} alt="appDownloadImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
