# Product fidelity audit — 2026-09-22

Status: **NOT approved — product-source gaps remain.**

## Follow-up: source verification and independent visual review

- Read-only live Objectives → Map inspection confirms a department-objective card (`Dp`) connected to a grouped set of `KR` cards. The expandable table also confirms Objective → KR nesting. This verifies the relationship, not the literal stepped-row composition or icon encoding of the marketing Alignment illustration.
- Read-only Home → company group → Engineering group inspection confirms the current live Engineering Home uses Objectives’ progress / Metrics progress, a graph, status breakdown and Engineering objectives. It does not match the newer EN / Alignment / Engagement / OKR-progress summary from the supplied Figma/prototype. Do not call that newer representation verified current live UI.
- Strategy overview remains an approved marketing story with no verified literal product screen. Company/Engineering two-stack grouping and `E` badges remain unverified; do not silently infer them from generic illustration references.
- Left-detail revision `edbe9a0` was independently reviewed by GPT from six actual 1440×1100 screenshots plus the supplied reference, and by Claude in the live page with screenshots and DOM measurements. Both gave **6/6 visual APPROVE for the shared left component**, not blanket product-fidelity approval.
- Main-agent measurements: title/body/CTA x=169px at 1440; paragraph line counts 4/5/4/5/4/5 at 16/24; detail height470px and right illustration height420px unchanged; zero broken images in all six states. At800px, the existing stacked layout reflows without page-width overflow.
- Gemini received all six actual screenshots after reporting it could not visually render the URL. It described five states as visually clean; an initial Strategy overlap claim quoted text absent from that state. Rechecking the fresh57d97a8 screenshot, it withdrew the claim and confirmed clean text and the requested two-level secondary. Reviewer claims were independently checked rather than blindly accepted.
- Latest user-authorized Strategy-secondary correction is separate from the left-only scope: remove the redundant Needs attention heading, retain warning tile beside Enterprise expansion / Missing measurable target and a right arrow. Other illustration content is unchanged.
- Strategy correction57d97a8 (`strategy-evidence-2`) received independent GPT and Claude APPROVE plus a positive Gemini visual recheck. Main/browser and Claude measurements agree:240×66 card,40×40 tile, title/subtitle both one line, right arrow, no content overlap. This is a scoped visual approval, not a resolution of the open product-source questions.

## Follow-up: Check-ins and Engagement — 2026-09-22

Live product was inspected again through the authenticated browser, including screenshots and DOM. No account data or employee portraits were copied into the public prototype.

- Check-ins navigation targets `#/check-ins/feed`. The actual surface is chronological: date grouping, author/avatar/time, entity, Value / Progress / Status, Reply / React. Replaced the invented owner-progress table with this pattern, using synthetic avatars and skeleton data. The previous confirmed example is 50% → 60%, two days ago; the unchanged AI draft proposes 68%. The draft is not represented as already submitted.
- Dashboard → Performance report → People → By status exposes People, Not Started, On Track, Behind, At Risk, Closed, Abandoned, Avg.total. Replaced the invented Participation / Last update columns with a reduced, order-preserving subset: People, On Track, Behind, Avg.total. Counts are skeletons; neutral averages are synthetic examples. Quiet-owner dates remain exclusively in the AI evidence overlay. Progress is not used as a proxy for participation.
- Both corrections preserve ProductFrame, primary/secondary geometry, six agent stories, approved overlay copy, generated portraits, and official service logos.
- Claude independently reviewed the mapping before implementation and identified the confirmed-vs-draft temporal distinction and the need to keep status separate from participation. Final deployed review: commit `adc8c3b`, CSS `product-truth-2`, JS `product-truth-1`: **semantic APPROVE for both corrections and visual 6/6 APPROVE**. This does not establish literal product fidelity for the four other backgrounds.
- Regression constraint: Engagement status rows remain 28px with 24px portraits; the third portrait ends at y=259 and the secondary starts at y=262 relative to the illustration in Claude's check. Preserve that clearance when changing rows or overlays. Broken images: zero.

The historical table below records the earlier audit, not the current resolution of these two backgrounds. Other entries still need their own evidence rather than inheriting approval from these two fixes.

References define composition, hierarchy, density and story. Verified current Oboard defines literal product UI. **Skeletonize data, not product truth.** This contract supersedes reference-first copying of UI details, not the approved visual composition.

Read-only current-product inspection confirmed Home, Check-ins, Objectives and Dashboard navigation. No People destination was present. Home showed objectives progress, metrics progress, objectives and groups. Check-ins showed a chronological update feed with Value, Progress, Status, Reply and React. Objectives exposed Alignment view, List, Progress and Roadmap, with objective/metric rows and progress/status fields. No customer data is reproduced here.

| Illustration | Confirmed / intentional | Still unresolved |
| --- | --- | --- |
| Strategy | Approved marketing story, Vision → Strategy → OKRs | Strategy overview is not verified as a real Home surface; its hierarchy and icons need a source |
| OKR Drafting | Objectives destination and progress pattern; draft text is illustrative AI output | Company/department grouping and C/E badges need exact product counterparts |
| Alignment | Objectives destination, alignment view and progress fields | Objective → objective → KR relationships and tile encoding need authoritative verification |
| Check-in | Check-ins destination; official GitHub/Figma/Google Docs assets | Background owner-progress table conflicts with observed chronological feed; preserve composition but obtain approved product-accurate mapping |
| Engagement | Approved AI report story and neutral avatars | Team screen, People/Groups tabs and People navigation are not verified; do not substitute Home by guesswork |
| Retrospective | Approved agenda/carry-forward marketing story | Engineering Home and Alignment/Engagement/OKR-progress KPI trio not verified as current product UI |

Shared selectors, sidebar icons and active states must be checked in context; matching an icon from a product bundle does not prove the destination exists. Sample values and generated AI output are marketing examples, not claims of shipped product features. AI controls also require product confirmation if presented as shipped UI.

Scope remains narrow: lighter shared left detail, official integration logos and confirmed product-truth corrections only. Preserve all approved right-side geometry, density and story. Do not remove meaning or redesign to resolve a source gap.
