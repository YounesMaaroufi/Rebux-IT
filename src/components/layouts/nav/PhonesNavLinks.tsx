import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routes } from "@/constants";

import { AlignRight } from "lucide-react";

const PhonesNavLinks = () => {
  return (
    <div className="md:hidden block ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignRight color="#fff" size={50} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {routes.map((route) => (
            <DropdownMenuItem>
              <a className="text-sm" href={route.href}>
                {route.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PhonesNavLinks;
