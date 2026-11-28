import { test } from "node:test";
import { strict as assert } from "node:assert";
import { PAGE_SEO, pageHead } from "./seo";

test("warehouse article publication and modification dates are November 27, 2026", () => {
  const article = PAGE_SEO["/insights/barcode-scanner-warehouse-illusion"].article;
  assert.equal(article?.published, "2026-11-27");
  assert.equal(article?.modified, "2026-11-27");
});

test("warehouse article structured data uses the requested language and dates on both leaves", () => {
  for (const lang of ["en", "ua"] as const) {
    const head = pageHead("/insights/barcode-scanner-warehouse-illusion", lang);
    const script = head.scripts.find(entry => entry.type === "application/ld+json");
    assert.ok(script);
    const schema = JSON.parse(script.children);
    assert.equal(schema.inLanguage, lang === "ua" ? "uk" : "en");
    assert.equal(schema.datePublished, "2026-11-27");
    assert.equal(schema.dateModified, "2026-11-27");
  }
});