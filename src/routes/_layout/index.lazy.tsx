import Landing from "@/components/layouts/landing";
import { createFileRoute } from "@tanstack/react-router";

const Home = () => {
  return <Landing />;
};

export const Route = createFileRoute("/_layout/")({
  component: Home,
});
