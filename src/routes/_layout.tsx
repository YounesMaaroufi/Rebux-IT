import Footer from "@/components/layouts/footer/footer";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="font-inika ">
      <div className="min-h-[40vh] flex items-end bg-black">
        {/* TODO: GALLERY */}
      </div>
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
}
