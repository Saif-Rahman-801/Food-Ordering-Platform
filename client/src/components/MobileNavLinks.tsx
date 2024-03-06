import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const {logout} = useAuth0()
  return (
    <div>
      <Link to="/user-profile" className="flex bg-white items-center font-bold">
        user-profile
      </Link>
      <Button
        onClick={async () => await logout()}
        className="font-semibold bg-pink-500 flex-1"
      >
        Sign out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
