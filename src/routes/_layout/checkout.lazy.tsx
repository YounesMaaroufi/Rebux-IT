import ShippingInfomration from "@/components/checkout/ShippingInfomration";
import ShoppingCard from "@/components/checkout/ShoppingCard";
import Heading from "@/components/layouts/Heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { PAYMENT_METHOD } from "@/constants";
import { cn } from "@/lib/utils";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const CheckoutPage = () => {
  const [completed, setCompleted] = useState<boolean>(false);
  return (
    <div className="space-y-8 py-4 font-sans">
      <Heading label="CHOOSE YOUR PAYMENT METHOD" />
      <div className="container mx-auto space-y-8">
        <div className="flex justify-center gap-6 py-4 flex-wrap">
          {PAYMENT_METHOD.map((image, i) => (
            <img key={i} src={image} alt={image} />
          ))}
        </div>
        <div className="flex gap-x-8 justify-evenly flex-wrap gap-y-8">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold">Checkout</h1>
            <h3 className="text-lg">Shipping information</h3>
            <h1 className="flex gap-4 justify-center items-center">
              <span className={cn("text-md", !completed && "font-bold")}>
                Address
              </span>
              <span className="h-[0.10rem] w-10 bg-zinc-900" />
              <span className="h-[0.10rem] w-10 bg-zinc-900" />
              <span className={cn("text-md", completed && "font-bold")}>
                Payment
              </span>
            </h1>
            {!completed && <ShippingInfomration setCompleted={setCompleted} />}
            {completed && (
              <div className="flex flex-col gap-y-8 w-[343px]">
                <div className="flex justify-between gap-8">
                  <div className="border-2 border-cyan-500 w-1/2 rounded-md">
                    <img
                      src="/checkout/cih.svg"
                      width={50}
                      alt="cih"
                      className="mx-auto"
                    />
                  </div>
                  <div className="border-2 border-black bg-black text-white w-1/2 flex justify-center items-center text-xs rounded-md">
                    Whatsapp
                  </div>
                </div>
                <div className="space-y-4">
                  <h1>Payment Details</h1>
                  <div>
                    RIB: <b>1239048-102394889</b>
                  </div>
                  <div>
                    Name: <b>Saad Majdaoui</b>
                  </div>
                  {/* to do send screenshot */}
                  <Link
                    to="/"
                    className={buttonVariants({
                      className: "rounded-md w-full text-xs",
                    })}
                  >
                    Take me To Whatsapp
                  </Link>
                  <Button onClick={() => setCompleted(false)} variant="ghost">
                    back
                  </Button>
                </div>
              </div>
            )}
          </div>
          <ShoppingCard />
        </div>
      </div>
      <Link
        to="/contact"
        className="underline text-center font-bold text-2xl block cursor-pointer"
      >
        To Follow Your Order Contact Us
      </Link>
    </div>
  );
};

export const Route = createFileRoute("/_layout/checkout")({
  component: CheckoutPage,
});
