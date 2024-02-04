import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routes } from "@/constants";
import { Link } from "@tanstack/react-router";

import { AlignRight } from "lucide-react";

const PhonesNavLinks = () => {
  return (
    <div className="md:hidden block ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignRight color="#fff" size={50} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {routes.map((route, i) => (
            <DropdownMenuItem key={i}>
              <Link className="text-sm" to={route.href}>
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PhonesNavLinks;
