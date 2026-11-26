import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Memory";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/memory")({
  head: () => pageHead("/memory", "ua"),
  component: Page,
});
