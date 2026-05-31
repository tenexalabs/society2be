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
- Optional Google Sheets backend through Google Apps Script

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

## Google Sheets backend

The site can use Google Sheets as a lightweight backend for:

- Incidents
- Incident status updates
- Suggestions
- Contacts

Setup:

1. Create a Google Sheet.
2. Open Extensions -> Apps Script.
3. Paste the contents of `google-apps-script/Code.gs`.
4. Save the project.
5. Deploy -> New deployment -> Web app.
6. Set "Execute as" to "Me".
7. Set "Who has access" to "Anyone".
8. Copy the Web App URL.
9. Paste it into `config.js`:

```js
window.SOCIETY2BE_CONFIG = {
  googleAppsScriptUrl: "PASTE_YOUR_WEB_APP_URL_HERE"
};
```

10. Commit and push the change to GitHub.

The Google Sheet will automatically create three tabs:

- `Incidents`
- `Suggestions`
- `Contacts`

For contacts, use these columns:

```text
name, role, category, phone, email
```

## Current data behavior

If `config.js` has no Google Apps Script URL, incidents and suggestions are saved in the visitor's browser using `localStorage`. After the URL is configured, the site reads and writes shared data through Google Sheets.
