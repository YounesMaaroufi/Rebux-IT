import CustomizeMyCard from "@/components/CustomizeMyCard";
import CardCanvas from "@/components/canvas/CardCanvas";
import Heading from "@/components/layouts/Heading";
import { buttonVariants } from "@/components/ui/button";

import { Link, createFileRoute } from "@tanstack/react-router";

const buy = () => {
  return (
    <div className="relative z-[49] space-y-4">
      {/* section 1 */}
      <div className="h-[40vh]">{/* TODO: gallery */}</div>
      {/* section 2 */}
      <Heading fill label="GET MY CARD READY" />
      <div className="grid md:grid-cols-2 w-full gap-4 grid-cols-1">
        <div className="bg-black text-white text-lg py-8 space-y-8">
          <h3 className="text-center">BUY A CARD</h3>
          {/* TODO : absolute div that matchs saad's design */}
          <div className="flex justify-center items-center flex-col flex-wrap gap-y-10 w-full mx-auto h-[200px]">
            <span>EASY</span>
            <span>CHEAP</span>
            <span>LUXURIOUS</span>
            <span>IMPRESSION</span>
            <span>UNIQNESS</span>
            <span>UNIQNESS</span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col my-4">
          <CardCanvas />
          <div className="text-md font-bold">
            <p>Quantity</p>
          </div>
          <Link
            className={buttonVariants({
              className:
                "font-bold text-xl text-[#C4C4C4] bg-gradient-to-r from-white/25 from-0% via-50% via-black to-black to-100% w-fit rounded-full px-10 py-4",
              variant: "default",
            })}
            to="checkout"
          >
            BUY NOW
          </Link>
        </div>
      </div>
      {/* section 3  */}
      <Heading fill label="CUSTOMIZE MY CARD" />
      <CustomizeMyCard />
    </div>
  );
};

export const Route = createFileRoute("/_layout/buy")({
  component: buy,
});
