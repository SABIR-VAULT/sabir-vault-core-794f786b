import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Frankenstein";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/insights/frankenstein-syndrome")({
  head: () => pageHead("/insights/frankenstein-syndrome", "ua"),
  component: Page,
});
