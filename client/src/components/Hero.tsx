import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img
        className="w-full max-h-[600px] object-cover"
        src={hero}
        alt="PandaFood Hero Image"
      />
      
    </div>
  );
};

export default Hero;
