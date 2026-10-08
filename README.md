# Public Code Layer import fixture

A synthetic, public app maintained by the Code Layers E2E test organization.
The fixture has no package dependencies or secrets. Its checked-in
`.figma/make/install`, `.figma/make/dev`, and `.figma/make/dev.json` configuration
lets Make start it without generating bootstrap scripts.

Run `.figma/make/install`, then `.figma/make/dev`. The app listens on port 8000;
set `PORT` to use a different port.

Keep the `CODE_LAYER_FIXTURE_V1` marker, `Increment counter` button,
`Counter value: N` status, `Enable fixture` checkbox, and
`Fixture status: enabled/disabled` text stable. These are the browser-test
contract for proving that the imported app is interactive, not a thumbnail.
