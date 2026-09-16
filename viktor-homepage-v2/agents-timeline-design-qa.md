# Agents timeline — design QA

Reference: existing “Keep every cycle moving” composition plus the supplied Oboard Strategy reference and user corrections from 2026-09-16.

Prototype: `agents-timeline.html`

## Visual comparison

- Implementation evidence: in-app-browser captures at `1280×720` and `1600×900` CSS pixels, device scale factor 1. At 1600px the centered page rail is exactly `1360px` wide, leaving intentional Strategy-style side margins.
- The hero title is constrained to 900px while the subtitle follows Viktor's unconstrained one-line desktop treatment. The lower result now presents two prioritised findings, readable 12px table body text, a short verdict, two stats, and one primary action rather than a compressed three-row admin panel.
- The track line has no hard-coded gap calculation: its endpoints derive from the actual first and last checkpoint rects. At 1600px checkpoint centers were `264.16`, `585.66`, `1014.33`, and `1335.83`px; the corresponding card/group centers were `264.16`, `585.66`, `1014.33`, and `1335.83`px.
- The connector uses the selected card's rendered rect relative to the cycle, and both the line and marker use one center coordinate with `translateX(-50%)`. The six-state test returned zero measurable delta between active-card, line, and marker centers.
- Visual cleanup: the selected card now uses one calm accent border/light fill rather than an inset double border; the connector has a 46px dedicated lane so it no longer reads as a circle pressed into the work shell.
- Hero normalization: the heading now matches Viktor's `platform-4-states.html` rhythm — 14px eyebrow, `clamp(42px, 4.4vw, 62px)` / `1.02` heading, 24px eyebrow-to-heading, 10px heading-to-subtitle, 21px subtitle, and 44px subtitle-to-content. The phase names are centered on their checkpoints, and every card has restrained default, hover, and selected elevation.

## Interaction verification

- Two independent visual audits were completed against the supplied reference and current prototype. Their P0 findings (unbounded rail, undersized type, cramped result, 1px marker drift) were corrected before this final pass.
- Visually tested all six clickable cards in the in-app browser: Strategy Readiness, OKR Drafting, Alignment Analysis, Check-in Drafting, Engagement Report, and Retrospective Prep.
- Each state selected the expected card, updated its output title/two findings/stats/primary CTA, and moved the connector exactly to that card center. At 1600px the measured centers were respectively `264.164`, `478.496`, `692.828`, `907.160`, `1121.496`, and `1335.828`px for all three elements.
- Browser console inspection returned no warnings or errors. Focused regions reviewed: constrained rail, phase/checkpoint alignment, card-to-marker lane, readable two-row result, and verdict/CTA panel.
- Final 1440×900 check: heading geometry is 63.23px high with the required 24px/10px/44px spacing; phase and group centers differ only by sub-pixel rasterization (`≤0.002px`). After the full 240ms connector transition, Strategy's card, line, and marker centers were all `194.164px` (difference `<0.001px`).

## Follow-up redesign — result surface

- User correction: the lower result was visually too small and fragmented. It is now a 356px primary proof surface rather than a compact table.
- Hierarchy is intentionally bounded: agent heading `32px`, result statement `24px`, explanatory/proof copy `16px`; nested content no longer outranks its owning agent. Outer shell padding is `30px 32px`; inner result padding is `22px 24px`; summary padding is `20px`.
- The result shows one general conclusion, one explanation, one named evidence item, and one true next step. The six data objects now include explicit `next` values; the old column-three values (for example, “High” or “KPI + Jira”) are never misrepresented as an action.
- Final six-state browser run at 1440×1000: no result, summary, or next-step overflow; all six next steps fit; connector delta is at most `0.002px`; browser console has no warnings or errors.

## Final desktop approval — 2026-09-16

- The desktop acceptance pass deliberately excludes responsive/mobile behavior, per the user’s explicit prioritisation.
- Final browser regression at `1440×1000`: all six agents were selected in turn. Each state had no result, summary, or action overflow; the connector custom coordinate matched the rendered center of its selected card within `<0.01px`; the console had no warnings or errors.
- The result panel starts exactly `16px` after the work header. The summary uses two equal `minmax(0, 1fr)` tracks; divider-adjacent padding is balanced at `8px` on both sides.
- Visual hierarchy was capped in the final revision: agent title `28–32px`, result statement `22–24px`, summary value `22px`, and proof/action copy `14–15px`. Long summary values are allowed to wrap rather than clip.
- Architecture approval: fresh desktop review approved by ChatGPT, Gemini, and Claude. Earlier review verdicts are superseded by this revised pass.

## Result

Desktop web variant: approved. Mobile remains intentionally deferred.
