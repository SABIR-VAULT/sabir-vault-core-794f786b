import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Memory";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/memory")({
  head: () => pageHead("/memory", "en"),
  component: Page,
});
