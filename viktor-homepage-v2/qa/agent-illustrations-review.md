# Six illustration implementation review

Source: oboad_ai_agents_codex_tz.md, complete 398-line brief.
Figma: QifE8JQBo3F3pylu8cORZq / Preview 3657:74098.

Shared code: agent-illustrations.js and agent-illustrations.css. All six use the same ProductFrame, sidebar, context selectors, skeleton primitives, primary/secondary overlays, sparkle and CTA treatment.

Desktop checks: all six illustration viewports are 420px high; ProductFrame is 328px high; primary width 240px; secondary width 218px; primary top 24px; secondary bottom 16px and 12px protrusion beyond the ProductFrame left edge. Overlay content has no horizontal overflow. One four-point sparkle per primary, none on secondary. All six card footer borders are 0px. Page switcher and initial AI Agents route retained.

Checked all six states visually in the actual page and together in agent-illustrations-review.html. Verified required scores, source labels, objective and KRs, readiness message, retrospective agenda, selected activation KR and absence of an incoming root connector.

Deliberate adaptations: exact live-product logo replaces malformed generated logos; one shared product sidebar replaces inconsistent reference sidebars; compact initials/neutral avatar placeholders avoid introducing real people; heavy nested cards become light rows; secondary overlays omit decorative sparkles. Left-side existing content is retained. Illustration actions are static marketing artwork, not product submissions.

## Independent review — 2026-09-22

- ChatGPT visually reviewed three overlapping screenshots of all six scenes at commit `9924353`. It accepted the shared layout, overlay geometry, logo, sparkle, typography, scores and content, but requested hierarchy connector corrections in Strategy and Alignment.
- The connector correction in `21ec02b` derives paths from actual parent tile bottom-centers to child tile left-centers, with rounded elbows. There is no incoming root path or decorative independent spine. A ResizeObserver keeps attachments aligned when the illustration width changes.
- ChatGPT withdrew its initial avatar blocker after comparing the exact brief: a photographic first avatar is preferred, not mandatory. Neutral placeholders are a documented adaptation; no private live-product employee portraits are published.
- Gemini declined visual review both from URLs and an uploaded screenshot. This is an unavailable review, not approval.
- ChatGPT re-reviewed screenshots after the connector correction and explicitly returned APPROVED for that correction pass.
- Claude completed a visual/DOM review and accepted the shared geometry, logo, sparkle and intentional layering. Valid findings: restore Retro Key metrics signals and prevent the selected Alignment KR from wrapping. These are fixed in `5cdb11a`, followed by an 8px breathing-room adjustment above the Retro metrics. Its requests for seven people and identical primary heights conflict with the authoritative brief and were returned for clarification, not implemented.
- Semantic refinement replaces generic menu glyphs: Vision→eye, OKRs/KRs→chart-bar, Progress→trending-up, Plans→list-details, Blockers→alert-triangle. These are unmodified Tabler 3.34.1 assets from the same icon family already used by the surrounding agent cards, a documented local adaptation where product menu icons conveyed the wrong meaning. Product navigation, logo and sparkle remain actual product assets. No employee photos were added.
- Final independent approval remains pending; do not describe the complete implementation as approved or complete.
