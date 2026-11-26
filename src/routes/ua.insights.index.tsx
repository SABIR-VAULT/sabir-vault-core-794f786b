import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Insights";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/insights/")({
  head: () => pageHead("/insights", "ua"),
  component: Page,
});
