# Oboard illustration assets

Strategy hierarchy uses unmodified SVG exports from Oboard Design System 25/26, inspected through the Oboard Slava working file on 2026-09-22:
- `icon-ds-eye.svg`: `eye`, component key `f1a377c66ba19309ee8c0823eeb6f0fb8a444522`, working node `1685:19528`.
- `icon-ds-target.svg`: `target`, component key `59b60f0f02462e5890bf6de3dac87d189e5ad681`, working node `1657:7874`.
- `icon-ds-chart-column.svg`: `chart-column`, component key `a76d24fa9162f396e7bfb2233bb87387d5956b46`, working node `3676:1491`.
Native 24px geometry is preserved. The existing semantic tile colors are applied through CSS masks; paths were not redrawn. The Custom group shape Target/Diagram variants were inspected but do not match the intended eye/target/vertical-bars story.

The seven icon-prefixed SVGs are exact symbol artwork extracted from the public Oboard application bundle at https://app.oboard.io/js/chunk-common.a7943ed6.js on 2026-09-22. Only the symbol wrapper was converted to an SVG document. The logo and glyph paths have not been redrawn.

Service marks were replaced with unmodified official SVG artwork on 2026-09-22. They are rendered as images, not recolored CSS masks:

- GitHub: `GitHub Logos/SVG/GitHub_Invertocat_Black.svg` from https://brand.github.com/GitHub_Logos.zip (https://brand.github.com/foundations/logo).
- Figma: the full-color mark served by the official brand page, https://static.figma.com/app/icon/2/favicon.svg (https://www.figma.com/using-the-figma-brand/).
- Google Docs: official current product mark, https://www.gstatic.com/images/branding/productlogos/docs_2026/v2/web/192px.svg, linked from https://workspace.google.com/products/docs/.

The prior monochrome Simple Icons approximations are no longer used for these service marks. Logo geometry and colors must not be redrawn or themed: the service identity carries the source-evidence meaning.

Illustration colors reuse the current Oboard product palette. The four-point sparkle is the product's icon-sparkle, rendered through a CSS mask. The eye, chart-bar, trending-up, alert-triangle and list-details semantic glyphs are unmodified Tabler 3.34.1 SVGs, the same family used by the surrounding agent cards; their source is https://cdn.jsdelivr.net/npm/@tabler/icons@3.34.1/icons/outline/.

`icon-ds-building.svg` and `icon-ds-users.svg` are unmodified SVG exports from Oboard Design System 25/26, retrieved 2026-09-22 for the Drafting “Based on” source rows. Company uses `building2`, component key `1fa230481352a38f3973d01a28855d828b5d7074`; team uses `users`, key `c97a8b3e9bf26b71aaf20a5af11f66d12431f332`. Both retain the native 24px viewBox and 2px round stroke; the local display uses 16px CSS masks.
