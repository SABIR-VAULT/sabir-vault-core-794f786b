import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Insights";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/")({
  head: () => pageHead("/insights", "en"),
  component: Page,
});
