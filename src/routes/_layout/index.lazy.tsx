import Landing from "@/components/layouts/landing";
import { createFileRoute } from "@tanstack/react-router";

const Home = () => {
  return (
    <div className="relative z-[49] space-y-4">
      <Landing />
    </div>
  );
};

export const Route = createFileRoute("/_layout/")({
  component: Home,
});
