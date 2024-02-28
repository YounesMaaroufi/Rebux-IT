import CustomizeMyCard from "@/components/CustomizeMyCard";
import CardCanvas from "@/components/canvas/CardCanvas";
import Heading from "@/components/layouts/Heading";
import { Button, buttonVariants } from "@/components/ui/button";
import useCart from "@/hooks/useCart";

import { createFileRoute, redirect } from "@tanstack/react-router";

const CustimzePage = () => {
  /**
   * converting canvas to PNG
   * and downloading it in the browser
   */

  const addCustomizedCard = () => {
    addItem({
      quantity: 1,
      price: 50,
      name: "Customized",
      image: "/logo.png",
    });
  };
  const downloadCanvasAsPNG = () => {
    const canvas = document.querySelectorAll("canvas")[0];
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "3d_model.png";
    link.click();
  };

  // add the item to the list cart
  const { addItem } = useCart();

  return (
    <div className="relative z-[49] space-y-4 py-4">
      {/* section 1 */}
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
          <div className="text-md font-bold"></div>
          <Button
            onClick={() => {
              addItem({
                quantity: 1,
                price: 20,
                name: "Card",
                image: "/logo.png",
              });

              redirect({
                to: "/checkout",
                replace: true,
                resetScroll: true,
                startTransition: true,
              });
            }}
            className={buttonVariants({
              className:
                "font-bold text-xl text-[#C4C4C4] bg-gradient-to-r from-white/25 from-0% via-50% via-black to-black to-100% w-fit rounded-full px-10 py-4",
              variant: "default",
            })}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      {/* section 2  */}
      <Heading fill label="CUSTOMIZE MY CARD" />
      <CustomizeMyCard />

      <div className="space-y-2">
        <h2 className="text-center font-bold">DONE?</h2>
        <Button
          className="block mx-auto font-bold text-md text-[#C4C4C4] bg-gradient-to-r from-white/25 from-0% via-50% via-black to-black to-100% rounded-full px-20 cursor-pointer"
          onClick={() => {
            addCustomizedCard();
            downloadCanvasAsPNG();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_layout/customize")({
  component: CustimzePage,
});
