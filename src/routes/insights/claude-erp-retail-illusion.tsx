import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/ClaudeErp";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/claude-erp-retail-illusion")({
  head: () => pageHead("/insights/claude-erp-retail-illusion", "en"),
  component: Page,
});
