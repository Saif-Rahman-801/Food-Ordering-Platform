import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <div>
      <Button
        variant="ghost"
        className="font-bold hover:text-black hover:bg-pink-500"
      >
        Sign in
      </Button>
    </div>
  );
};

export default MainNav;
