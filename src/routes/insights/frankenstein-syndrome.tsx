import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Frankenstein";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/frankenstein-syndrome")({
  head: () => pageHead("/insights/frankenstein-syndrome", "en"),
  component: Page,
});
