import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 py-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="text-3xl text-pink-600 font-bold tracking-tight"
          to={"/"}
        >
          PandaFood.eat
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
