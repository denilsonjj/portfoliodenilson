const SHEET_NAME = "Leads";

const HEADERS = [
  "Data",
  "Nome",
  "Email",
  "WhatsApp",
  "Origem",
  "Serviço",
  "Pacote",
  "Orçamento",
  "Prazo",
  "Briefing",
  "Mensagem completa",
];

function repairMojibake_(value) {
  if (typeof value !== "string") return value || "";

  const text = value.normalize ? value.normalize("NFC") : value;
  if (!/[ÃÂ]/.test(text)) return text;

  try {
    const bytes = [];
    for (let index = 0; index < text.length; index += 1) {
      const code = text.charCodeAt(index);
      if (code > 255) return text;
      bytes.push(code);
    }

    const repaired = Utilities.newBlob(bytes).getDataAsString("UTF-8");
    return repaired.indexOf("\uFFFD") === -1 ? repaired : text;
  } catch (error) {
    return text;
  }
}

function text_(value) {
  return repairMojibake_(value == null ? "" : String(value));
}

function getLeadsSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || "{}");
    const sheet = getLeadsSheet_();

    sheet.appendRow([
      payload.submittedAt ? new Date(payload.submittedAt) : new Date(),
      text_(payload.name),
      text_(payload.email),
      text_(payload.phone),
      text_(payload.source),
      text_(payload.service),
      text_(payload.packageName),
      text_(payload.budget),
      text_(payload.deadline),
      text_(payload.brief),
      text_(payload.message),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
