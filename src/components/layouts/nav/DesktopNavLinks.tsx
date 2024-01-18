import { routes } from "@/constants";

const DesktopNavLinks = () => {
  return (
    <div className="items-center gap-14 md:flex hidden ">
      {routes.map((route) => (
        <a
          className="relative text-[#C3C3C3] before:bg-[#C3C3C3] before:h-[1.5px] before:absolute before:-bottom-1 before:w-full text-sm hover:before:scale-x-[0.7] before:transition-all"
          href={route.href}
        >
          {route.label}{" "}
        </a>
      ))}
    </div>
  );
};

export default DesktopNavLinks;
