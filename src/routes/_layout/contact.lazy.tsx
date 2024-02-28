import { createFileRoute } from "@tanstack/react-router";

const Contact = () => {
  return <div>contact.lazy</div>;
};

export const Route = createFileRoute("/_layout/contact")({
  component: Contact,
});
