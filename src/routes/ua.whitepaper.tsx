import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Whitepaper";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/whitepaper")({
  head: () => pageHead("/whitepaper", "ua"),
  component: Page,
});
