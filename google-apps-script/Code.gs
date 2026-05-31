const SHEETS = {
  incidents: "Incidents",
  suggestions: "Suggestions",
  contacts: "Contacts"
};

function doGet(event) {
  setupSheets();
  const action = String(event.parameter.action || "list");
  const callback = String(event.parameter.callback || "");
  const data = action === "contacts"
    ? { contacts: readSheet(SHEETS.contacts) }
    : {
        incidents: readSheet(SHEETS.incidents),
        suggestions: readSheet(SHEETS.suggestions),
        contacts: readSheet(SHEETS.contacts)
      };

  if (callback) {
    return ContentService
      .createTextOutput(`${callback}(${JSON.stringify(data)});`)
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

  if (action === "updateIncident") {
    updateIncidentStatus(payload.id, payload.status);
  }

  if (action === "createSuggestion") {
    appendRow(SHEETS.suggestions, [
      payload.topic,
      payload.message,
      payload.createdAt || new Date().toISOString()
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function setupSheets() {
  const spreadsheet = SpreadsheetApp.getActive();
  ensureSheet(spreadsheet, SHEETS.incidents, ["id", "name", "location", "category", "description", "status", "createdAt"]);
  ensureSheet(spreadsheet, SHEETS.suggestions, ["topic", "message", "createdAt"]);
  ensureSheet(spreadsheet, SHEETS.contacts, ["name", "role", "category", "phone", "email"]);
}

function ensureSheet(spreadsheet, name, headers) {
  const sheet = spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
}

function appendRow(sheetName, values) {
  SpreadsheetApp.getActive().getSheetByName(sheetName).appendRow(values);
}

function readSheet(sheetName) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  const values = sheet.getDataRange().getValues();
  const headers = values.shift();
  return values
    .filter((row) => row.some((cell) => cell !== ""))
    .map((row) => {
      const item = {};
      headers.forEach((header, index) => {
        item[header] = row[index] instanceof Date ? row[index].toISOString() : row[index];
      });
      return item;
    });
}

function updateIncidentStatus(id, status) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEETS.incidents);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idColumn = headers.indexOf("id") + 1;
  const statusColumn = headers.indexOf("status") + 1;

  for (let row = 2; row <= values.length; row += 1) {
    if (String(sheet.getRange(row, idColumn).getValue()) === String(id)) {
      sheet.getRange(row, statusColumn).setValue(status);
      return;
    }
  }
}
