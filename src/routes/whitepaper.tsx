import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Whitepaper";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/whitepaper")({
  head: () => pageHead("/whitepaper", "en"),
  component: Page,
});
