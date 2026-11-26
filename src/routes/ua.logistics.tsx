import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Logistics";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/logistics")({
  head: () => pageHead("/logistics", "ua"),
  component: Page,
});
