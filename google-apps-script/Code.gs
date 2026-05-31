const SHEETS = {
  incidents: "Incidents",
  suggestions: "Suggestions",
  contacts: "Contacts",
  blogs: "Blogs"
};

function doGet(event) {
  setupSheets();

  const action = String(event.parameter.action || "list");
  const callback = String(event.parameter.callback || "");

  let data = {};

  switch (action) {
    case "contacts":
      data = {
        contacts: readSheet(SHEETS.contacts)
      };
      break;

    case "blogs":
      data = {
        blogs: readSheet(SHEETS.blogs)
      };
      break;

    case "incidents":
      data = {
        incidents: readSheet(SHEETS.incidents)
      };
      break;

    case "suggestions":
      data = {
        suggestions: readSheet(SHEETS.suggestions)
      };
      break;

    default:
      data = {
        incidents: readSheet(SHEETS.incidents),
        suggestions: readSheet(SHEETS.suggestions),
        contacts: readSheet(SHEETS.contacts),
        blogs: readSheet(SHEETS.blogs)
      };
  }

  if (callback) {
    return ContentService
      .createTextOutput(
        `${callback}(${JSON.stringify(data)});`
      )
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(event) {
  setupSheets();

  const payload = event.parameter || {};
  const action = String(payload.action || "");

  // Create Incident
  if (action === "createIncident") {
    appendRow(SHEETS.incidents, [
      payload.id,
      payload.name,
      payload.location,
      payload.category,
      payload.description,
      payload.status || "Not picked",
      payload.createdAt || new Date().toISOString()
    ]);
  }

  // Update Incident
  if (action === "updateIncident") {
    updateIncidentStatus(
      payload.id,
      payload.status
    );
  }

  // Create Suggestion
  if (action === "createSuggestion") {
    appendRow(SHEETS.suggestions, [
      payload.topic,
      payload.message,
      payload.createdAt || new Date().toISOString()
    ]);
  }

  // Create Blog
  if (action === "createBlog") {
    appendRow(SHEETS.blogs, [
      payload.id,
      payload.title,
      payload.category,
      payload.author,
      payload.summary,
      payload.content,
      payload.imageUrl,
      payload.status || "Published",
      payload.createdAt || new Date().toISOString()
    ]);
  }

  return ContentService
    .createTextOutput(
      JSON.stringify({
        ok: true
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}

function setupSheets() {
  const spreadsheet = SpreadsheetApp.getActive();

  ensureSheet(
    spreadsheet,
    SHEETS.incidents,
    [
      "id",
      "name",
      "location",
      "category",
      "description",
      "status",
      "createdAt"
    ]
  );

  ensureSheet(
    spreadsheet,
    SHEETS.suggestions,
    [
      "topic",
      "message",
      "createdAt"
    ]
  );

  ensureSheet(
    spreadsheet,
    SHEETS.contacts,
    [
      "name",
      "role",
      "category",
      "phone",
      "email"
    ]
  );

  ensureSheet(
    spreadsheet,
    SHEETS.blogs,
    [
      "id",
      "title",
      "category",
      "author",
      "summary",
      "content",
      "imageUrl",
      "status",
      "createdAt"
    ]
  );
}

function ensureSheet(
  spreadsheet,
  name,
  headers
) {
  let sheet =
    spreadsheet.getSheetByName(name);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
}

function appendRow(
  sheetName,
  values
) {
  SpreadsheetApp
    .getActive()
    .getSheetByName(sheetName)
    .appendRow(values);
}

function readSheet(sheetName) {
  const sheet =
    SpreadsheetApp
      .getActive()
      .getSheetByName(sheetName);

  if (!sheet) {
    return [];
  }

  const values =
    sheet.getDataRange().getValues();

  if (values.length <= 1) {
    return [];
  }

  const headers = values.shift();

  return values
    .filter(row =>
      row.some(cell => cell !== "")
    )
    .map(row => {
      const item = {};

      headers.forEach(
        (header, index) => {
          item[header] =
            row[index] instanceof Date
              ? row[index].toISOString()
              : row[index];
        }
      );

      return item;
    });
}

function updateIncidentStatus(
  id,
  status
) {
  const sheet =
    SpreadsheetApp
      .getActive()
      .getSheetByName(
        SHEETS.incidents
      );

  const values =
    sheet.getDataRange().getValues();

  const headers = values[0];

  const idColumn =
    headers.indexOf("id") + 1;

  const statusColumn =
    headers.indexOf("status") + 1;

  for (
    let row = 2;
    row <= values.length;
    row++
  ) {
    const currentId =
      sheet
        .getRange(
          row,
          idColumn
        )
        .getValue();

    if (
      String(currentId) ===
      String(id)
    ) {
      sheet
        .getRange(
          row,
          statusColumn
        )
        .setValue(status);

      return true;
    }
  }

  return false;
}