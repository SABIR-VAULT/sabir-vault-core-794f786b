import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/ExecutiveCopilot";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/solutions/executive-copilot")({
  head: () => pageHead("/solutions/executive-copilot", "en"),
  component: Page,
});
