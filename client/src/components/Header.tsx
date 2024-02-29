import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ fontFamily: "Lexend" }} className="border-b-2 py-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="text-3xl text-pink-600 font-bold tracking-tight"
          to={"/"}
        >
          PandaFood.eat
        </Link>
      </div>
    </div>
  );
};

export default Header;
