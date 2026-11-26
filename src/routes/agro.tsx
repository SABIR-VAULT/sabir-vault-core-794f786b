import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/Agro";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/agro")({
  head: () => pageHead("/agro", "en"),
  component: Page,
});
