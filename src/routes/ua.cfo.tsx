import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Cfo";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/cfo")({
  head: () => pageHead("/cfo", "ua"),
  component: Page,
});
