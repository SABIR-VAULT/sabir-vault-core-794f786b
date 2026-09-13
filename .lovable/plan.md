# Founder’s Note and Social Identity

## Summary
Add a bilingual Founder’s Note to the existing SABIR VAULT landing page without changing its established visual system or any unrelated content. The new section will appear immediately before Trust Center, matching the user-selected placement.

## Changes
- Upload the attached portrait to Lovable Assets as `sabir-dushayev-founder.jpg` and import its generated asset pointer.
- Add a `FoundersNote` section with:
  - EN/UA badge, headline, two quotation paragraphs, highlighted statement, signature, title, official-name note, and localized portrait alt text.
  - A reserved 4:5 portrait area, grayscale/contrast treatment, subtle hover color restoration, and existing cyan/glass visual language.
  - A two-column desktop layout and centered portrait-above-copy mobile layout.
- Render `FoundersNote` immediately before `TrustCenter`, without moving or modifying other sections.
- Add one page-level Schema.org `@graph` JSON-LD script containing Person, Organization, and WebSite entities.
  - Use the requested canonical founder photo URL: `https://sabirvault.com/assets/sabir-dushayev-founder.jpg`.
  - Use `https://sabirvault.com/favicon.ico` for the Organization logo, per the selected option.
- Update the footer’s GitHub link to exactly `https://github.com/SABIR-VAULT`.
- Add a LinkedIn icon link beside GitHub pointing to `https://www.linkedin.com/in/sabirvault/`, with matching sizing and interaction styling.

## Validation
- Verify EN/UA switching for every new string and portrait alt text.
- Parse the injected JSON-LD and confirm exactly one matching `@graph` block exists.
- Check desktop and mobile rendering, section order, 4:5 portrait reservation, and horizontal overflow.
- Confirm both footer social links and inspect browser console errors.

## Technical details
- Only `src/routes/index.tsx`, the generated portrait asset pointer, and the task checklist will change.
- Existing CSS, theme tokens, shared components, routes, navigation, animations, and all unrelated page sections remain untouched.
- The CDN image used by the page and the canonical `sabirvault.com/assets/...` structured-data URL intentionally differ until that canonical asset path is deployed, as requested.
