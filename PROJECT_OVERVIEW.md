# BeFree E-Scooter Rental — Project Overview

> Prepared on 2026-11-21 after reviewing the complete workspace.

## 1. Project summary

This is a static, single-page rental website for **BeFree E-Scooter Rental** in Da Nang, Vietnam. It is implemented with plain HTML, CSS, and JavaScript and has no build system, framework, backend, database, or package manager.

The project can be opened directly in a browser, although a local HTTP server is recommended for consistent asset and browser behavior.

## 2. Workspace inventory

| Path | Purpose |
|---|---|
| `home.html` | Complete page structure and content; the only HTML document. |
| `style.css` | Global layout, component styling, responsive breakpoints, and the visual design system. |
| `script.js` | Translations, language switching, mobile navigation, booking price calculation, WhatsApp submission, and floating contact menu. |
| `images/` | Local logos, scooter artwork, and service/benefit illustrations. |
| `web_ver2_content.zip` | Exact copy of the current project snapshot (HTML, CSS, JS, and images). |
| `PROJECT_OVERVIEW.md` | This project knowledge document. |

No additional source folders, configuration files, tests, package manifests, or hidden project directories were found.

## 3. Page structure

The page is organized into these sections:

1. Sticky header and top contact bar
2. Hero section
3. About section
4. Services section
5. Benefits / “Why choose us” section
6. Booking form
7. Customer testimonials
8. FAQ accordions
9. Footer
10. Floating hotline / Zalo / WhatsApp contact menu

Primary in-page navigation uses anchors: `#about`, `#services`, `#faq`, `#contact`, and `#booking`.

## 4. Assets

| Asset | Dimensions | Main usage |
|---|---:|---|
| `images/header_logo.png` | 1210×306 | Header and footer logo |
| `images/Logo.png` | 1061×992 | Hero artwork and favicon |
| `images/good_moto.png` | 435×435 | About, services, and clean/new benefit |
| `images/good_price.png` | 435×435 | Pricing/long-term rental and fair-price benefit |
| `images/quick_delivery.png` | 520×440 | Delivery and fast-response sections |
| `images/safety.png` | 435×435 | Safety benefit |

All assets are PNG files stored locally.

## 5. Styling architecture

The stylesheet starts by defining CSS custom properties for:

- Brand gold and gold variants
- Ink/text colors
- Muted text
- Cream background
- Borders and shadows

The design uses:

- A Manrope Google Font with an Arial fallback
- Sticky header
- Desktop and mobile navigation
- 1180px maximum content width
- Gold, dark green, cream, and white visual palette
- Desktop breakpoint around 980px
- Mobile breakpoint around 760px
- Small-phone breakpoint at 480px

## 6. Internationalization

The JavaScript contains translation dictionaries for:

- English (`en`)
- Vietnamese (`vi`)
- Chinese (`zh`)
- Korean (`ko`)
- Russian (`ru`)

The selected language is stored in `localStorage` under `befree-language`. Elements marked with `data-i18n` are replaced with the corresponding translated HTML.

Language metadata controls the selector label and flag icon. Flags are loaded from the external `flag-icons` CDN.

## 7. Booking behavior

The booking form:

- Requires full name, phone, rental date, and number of days
- Prevents dates earlier than the current local date
- Calculates an estimated total using:
  - 150,000 VND/day for 1–2 days
  - 140,000 VND/day for 3–4 days
  - 130,000 VND/day for 5–29 days
  - 70,000 VND/day for 30+ days
- Encodes the result into a WhatsApp pre-filled message
- Opens WhatsApp in a new browser tab
- Does not send data to a server or persist submissions

## 8. External integrations

- Google Fonts for Manrope
- jsDelivr CDN for flag icons
- Google Maps short URL
- Facebook page
- Telephone links
- Zalo deep link
- WhatsApp deep link

The project has no API keys or environment configuration.

## 9. Observations and likely future maintenance areas

The following items are recorded for future bug fixes or requested changes:

1. **Invalid saved language value:** `applyLanguage()` assumes `languageMeta[code]` always exists. An unexpected value in `localStorage` can result in `Cannot read properties of undefined`.
2. **Message localization:** The booking success message is currently English even when the selected language is Vietnamese, Chinese, Korean, or Russian.
3. **Name/phone validation:** The form uses only native required checks; no phone format or full-name quality validation is implemented.
4. **WhatsApp encoding:** The message begins with a literal `BeFree booking request%0A` pattern rather than building it entirely through `encodeURIComponent`. It generally works, but can be made consistent and safer.
5. **No backend:** Booking requests only open WhatsApp and are not reliably submitted or recorded as website leads.
6. **No form reset or explicit success state:** After opening WhatsApp, the form remains populated.
7. **Static date and price text:** Totals are recalculated locally, but pricing/discount rules are duplicated in `updatePrice()` and the submit handler.
8. **Hard-coded rates and contact details:** These appear in both HTML and JavaScript and may drift over time.
9. **Accessibility refinements:** Some menu states and mobile interactions can be improved; ARIA and focus behavior are still limited.
10. **Mobile header fit:** At small widths, logo, menu, language, and booking controls compete for space and may need visual QA on several devices.
11. **Hero height and visual overlap:** Mobile layouts switch the hero visual to a partially visible side asset and should be checked on narrow/short viewports.
12. **SEO metadata:** Basic description and favicon exist, but structured data, Open Graph/Twitter metadata, canonical URL, and multilingual `hreflang` links are absent.
13. **No legal sections:** Privacy, terms, and cookie handling are not currently included.
14. **ZIP archive:** It is an exact duplicate of the current files and should not be treated as independent source unless intentionally used as a release snapshot.

## 10. Editor diagnostics

At the time of review:

- No HTML diagnostics
- No JavaScript diagnostics
- No CSS diagnostics

The folder is not initialized as a Git repository.

## 11. Suggested conventions for future edits

- Keep project code dependency-free unless a real requirement benefits from a framework or library.
- Centralize pricing constants and contact constants in JavaScript.
- Keep all visible text in the translation dictionaries; replace hard-coded success text and placeholders as needed.
- Add a small validation helper for phone numbers and preserve the number/date inputs' native browser behavior.
- Keep archive snapshots separate from active development files and update or remove the ZIP intentionally.
- Test all breakpoints from 320px upward and verify keyboard interactions and screen-reader labels.
