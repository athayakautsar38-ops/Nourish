# Google Sheets Integration Setup

This guide connects the Nourish waitlist form to a Google Sheet using Google Apps Script.

---

## Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **Nourish Waitlist**
3. In **Row 1**, add these headers (exactly):

| A | B | C | D | E |
|---|---|---|---|---|
| Timestamp | Name | Email | Use Case | City |

---

## Step 2 — Open the Apps Script Editor

1. In your spreadsheet, click **Extensions → Apps Script**
2. Delete any existing code
3. Paste the following script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(data.submittedAt || new Date()),
      data.name,
      data.email,
      data.useCase,
      data.city,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test by running this function manually
function testEntry() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        useCase: "personal",
        city: "San Francisco",
        submittedAt: new Date().toISOString(),
      })
    }
  };
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the **gear icon** next to "Select type" → choose **Web app**
3. Set:
   - **Description**: Nourish Waitlist Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Authorize** the script when prompted
6. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/.../exec`)

---

## Step 4 — Add to Environment Variables

Open `.env.local` and paste your URL:

```
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Restart your dev server (`npm run dev`) — form submissions will now appear in your sheet.

---

## Notes

- **Dev mode**: If `GOOGLE_APPS_SCRIPT_URL` is not set, submissions are logged to the server console only. No data is lost in testing.
- **CORS**: Google Apps Script web apps do not require CORS configuration when called server-side (from our API route). The Next.js API route acts as a proxy — the browser never calls Apps Script directly.
- **Re-deploying**: If you change the Apps Script code, you must create a **new deployment** (not edit an existing one) and update the URL in `.env.local`.
