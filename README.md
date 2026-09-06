# Oboard dashboard prototypes

- [Home V19 — Objectives prototype](https://mvisl.github.io/oboard/objectives-prototype.html): click the Objectives section to collapse or expand it. Enter and Space work too. Matches the Figma ON/OFF variants with a 300 ms ease-out transition. Other controls are reference-only.
- [Sites version](https://oboard-objectives-prototype.breezy-river-6544.chatgpt.site) (owner access).
- [Source Figma frame](https://www.figma.com/design/QifE8JQBo3F3pylu8cORZq/Oboard-Slava?node-id=3320-19844).

The Objectives prototype uses standalone HTML, CSS, JavaScript and committed direct Figma exports. Open `objectives-prototype.html` directly or run `python3 build.py` and serve `dist/`. The 1440px composition uses exact Figma surfaces and scales uniformly to fit smaller windows. Only the Objectives section is interactive. Section state resets on reload. Reduced-motion preferences disable animation.

- `dashboard-original.html` - original copied dashboard reference.
- `dashboard-working.html` - duplicate for upcoming changes.
