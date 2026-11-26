import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Privacy";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("/privacy", "en"),
  component: Page,
});
