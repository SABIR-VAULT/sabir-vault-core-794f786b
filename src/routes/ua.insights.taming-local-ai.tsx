import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/TamingLocalAi";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/insights/taming-local-ai")({
  head: () => pageHead("/insights/taming-local-ai", "ua"),
  component: Page,
});
