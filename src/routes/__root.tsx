import Navbar from "@/components/layouts/nav/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
  notFoundComponent: () => {
    return <p>Not Found (on root route)</p>;
  },
});
