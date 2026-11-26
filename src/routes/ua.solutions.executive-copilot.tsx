import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/ExecutiveCopilot";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/solutions/executive-copilot")({
  head: () => pageHead("/solutions/executive-copilot", "ua"),
  component: Page,
});
