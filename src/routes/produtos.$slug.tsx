import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { getCategoria } from "@/lib/produtos-data";

export const Route = createFileRoute("/produtos/$slug")({
  beforeLoad: ({ params }) => {
    if (!getCategoria(params.slug)) throw notFound();
  },
  component: () => <Outlet />,
});
