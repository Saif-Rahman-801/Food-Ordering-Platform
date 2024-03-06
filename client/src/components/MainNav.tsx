import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  return (
    <div className="flex spac-x-2 items-center">
      {isAuthenticated ? (
        <UserNameMenu />
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-black hover:bg-pink-500"
          onClick={async () => await loginWithRedirect()}
        >
          Sign in
        </Button>
      )}
    </div>
  );
};

export default MainNav;
