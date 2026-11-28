import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/pages/BarcodeScanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ua/insights/barcode-scanner-warehouse-illusion")({
  head: () => pageHead("/insights/barcode-scanner-warehouse-illusion", "ua"),
  component: Page,
});