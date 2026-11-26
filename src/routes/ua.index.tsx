import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Home";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/")({
  head: () => pageHead("/", "ua"),
  component: Page,
});
