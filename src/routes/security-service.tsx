import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/SecurityService";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/security-service")({
  head: () => pageHead("/security-service", "en"),
  component: Page,
});
