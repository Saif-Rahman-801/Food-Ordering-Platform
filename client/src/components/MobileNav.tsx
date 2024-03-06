import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-pink-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="font-bold flex items-center gap-2">
              <CircleUserRound className="text-pink-500" />
              {user?.email}
            </span>
          ) : (
            <span> Welcome to PandaFood </span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <MobileNavLinks></MobileNavLinks>
          ) : (
            <Button
              onClick={async () => await loginWithRedirect()}
              className="font-semibold bg-pink-500 flex-1"
            >
              Sign in
            </Button>
          )}
          {/* <Button
            onClick={async () => await loginWithRedirect()}
            className="font-semibold bg-pink-500 flex-1"
          >
            Sign in
          </Button> */}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
