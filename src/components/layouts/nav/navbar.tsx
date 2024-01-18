import DesktopNavLinks from "./DesktopNavLinks";
import PhonesNavLinks from "./PhonesNavLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-black shadow-sm shadow-white w-full">
      <div className="container flex pt-2 justify-between items-center mx-auto">
        <a href="/#">
          <img src="/logo.svg" alt="logo" className="h-[100px]" />
        </a>
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
