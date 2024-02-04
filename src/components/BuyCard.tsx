import { Link } from "@tanstack/react-router";
import { FC } from "react";
import Heading from "./layouts/Heading";
import { buttonVariants } from "./ui/button";

interface BuyCardProps {
  title: string;
  buttonLabel: string;
  href: string;
}

const BuyCard: FC<BuyCardProps> = ({ buttonLabel, title, href }) => {
  return (
    <div className="flex flex-col gap-y-4 items-center">
      <Heading label={title} />
      <div className="max-w-[450px] min-w-[300px]">
        {/* TODO : add image */}
      </div>
      <Link
        className={buttonVariants({
          className:
            "font-bold text-xl text-[#C4C4C4] bg-gradient-to-r from-white/25 from-0% via-50% via-black to-black to-100% w-fit rounded-full px-10 py-4",
          variant: "default",
        })}
        to={href}
      >
        {buttonLabel}
      </Link>
    </div>
  );
};

export default BuyCard;
