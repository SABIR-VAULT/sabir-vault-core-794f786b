import { test } from "node:test";
import { strict as assert } from "node:assert";
import { PAGE_PATHS, languageForPath, localizedPath, switchLanguagePath } from "./localization";

test("every English page has a Ukrainian mirror and round-trip language switch", () => {
  for (const path of PAGE_PATHS) {
    const expected = path === "/" ? "/ua" : `/ua${path}`;
    const mirror = localizedPath(path, "ua");
    assert.equal(mirror, expected);
    assert.equal(languageForPath(mirror), "ua");
    assert.equal(switchLanguagePath(mirror, "en"), path);
  }
});

test("warehouse article has the requested Ukrainian page address", () => {
  assert.equal(switchLanguagePath("/insights/barcode-scanner-warehouse-illusion", "ua"), "/ua/insights/barcode-scanner-warehouse-illusion");
});