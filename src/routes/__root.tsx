import Navbar from "@/components/layouts/nav/navbar";
import { buttonVariants } from "@/components/ui/button";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
  notFoundComponent: () => {
    return (
      <div className="w-screen h-screen flex justify-center items-center flex-col gap-y-6">
        <Navbar />
        <div className="flex justify-center items-center gap-4">
          <AlertCircle size={100} />
          <h1 className="text-2xl font-bold">ERROR 404</h1>
        </div>
        <Link to="/" className={buttonVariants({ variant: "link" })}>
          Back to home page
        </Link>
      </div>
    );
  },
});
