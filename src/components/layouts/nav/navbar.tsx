import { Link } from "@tanstack/react-router";
import DesktopNavLinks from "./DesktopNavLinks";
import PhonesNavLinks from "./PhonesNavLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 backdrop-blur-sm bg-black/80 shadow-sm shadow-white w-full z-[50]">
      <div className="container flex pt-2 justify-between items-center mx-auto">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-[100px]" />
        </Link>
        <div>
          {/* the desktop navlinks */}
          <DesktopNavLinks />
          {/* small devices */}
          <PhonesNavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
