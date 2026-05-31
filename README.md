# Society2Be

Society2Be is a static website for a 2100-family residential society. It includes:

- Mission and vision section
- Important contact directory with search
- Urgent WhatsApp and email links
- Incident logging with generated tracking numbers
- Public incident board with editable work status
- Suggestions by society topic
- Instant English/Hindi language switching
- Accessible, high-contrast saffron and marigold theme

## Run locally

Open `index.html` in a browser.

Or run a local preview server:

```bash
node server.mjs
```

Then open `http://127.0.0.1:4173`.

## GitHub Pages

After this folder is pushed to GitHub:

1. Open the GitHub repository.
2. Go to Settings -> Pages.
3. Select the `main` branch and `/root`.
4. Save.

The site is fully static, so it can be hosted directly on GitHub Pages.

## Current data behavior

Incidents and suggestions are saved in the visitor's browser using `localStorage`. For a production society deployment, connect these workflows to a backend database with authentication for staff and committee status updates.
