# Product fidelity audit — 2026-09-22

Status: **NOT approved — product-source gaps remain.**

## Follow-up: Check-ins and Engagement — 2026-09-22

Live product was inspected again through the authenticated browser, including screenshots and DOM. No account data or employee portraits were copied into the public prototype.

- Check-ins navigation targets `#/check-ins/feed`. The actual surface is chronological: date grouping, author/avatar/time, entity, Value / Progress / Status, Reply / React. Replaced the invented owner-progress table with this pattern, using synthetic avatars and skeleton data. The previous confirmed example is 50% → 60%, two days ago; the unchanged AI draft proposes 68%. The draft is not represented as already submitted.
- Dashboard → Performance report → People → By status exposes People, Not Started, On Track, Behind, At Risk, Closed, Abandoned, Avg.total. Replaced the invented Participation / Last update columns with a reduced, order-preserving subset: People, On Track, Behind, Avg.total. Counts are skeletons; neutral averages are synthetic examples. Quiet-owner dates remain exclusively in the AI evidence overlay. Progress is not used as a proxy for participation.
- Both corrections preserve ProductFrame, primary/secondary geometry, six agent stories, approved overlay copy, generated portraits, and official service logos.
- Claude independently reviewed the mapping before implementation and identified the confirmed-vs-draft temporal distinction and the need to keep status separate from participation. A deployed visual re-review is still required for this revision.

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
