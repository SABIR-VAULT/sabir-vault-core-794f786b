import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Logistics";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/logistics")({
  head: () => pageHead("/logistics", "en"),
  component: Page,
});
