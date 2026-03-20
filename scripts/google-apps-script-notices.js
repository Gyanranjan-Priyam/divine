/**
 * ================================================================
 * GOOGLE APPS SCRIPT FOR DIVINE NOTICE MANAGEMENT SYSTEM
 * ================================================================
 * 
 * IMPORTANT: This file is NOT part of your Next.js project.
 * Copy this code and paste it into Google Apps Script Editor.
 * 
 * SETUP INSTRUCTIONS:
 * ==================
 * 
 * 1. CREATE GOOGLE SHEET:
 *    - Go to https://sheets.google.com
 *    - Create a new blank spreadsheet
 *    - Name it: "Divine Notices Database"
 *    - Rename first sheet tab to: "Notices"
 *    - In Row 1, add these exact column headers:
 *      ID | Title | Link | Date | Category | Active
 * 
 * 2. GET SHEET ID:
 *    - Look at your browser URL
 *    - Copy the ID from: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
 *    - The SHEET_ID is between /d/ and /edit
 * 
 * 3. OPEN APPS SCRIPT EDITOR:
 *    - In your Google Sheet, click: Extensions > Apps Script
 *    - Delete any default code in the editor
 *    - Copy ALL the code below (from line 48 onwards)
 *    - Paste it into the Apps Script editor
 * 
 * 4. CONFIGURE:
 *    - Find line 48 below: const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
 *    - Replace 'YOUR_GOOGLE_SHEET_ID_HERE' with your actual Sheet ID
 *    - Example: const SHEET_ID = '1abc123XYZ456def789ghi012jkl345mno678pqr';
 * 
 * 5. SAVE:
 *    - Click the save icon (💾) or press Ctrl+S / Cmd+S
 *    - Name the project: "Divine Notice API"
 * 
 * 6. DEPLOY:
 *    - Click: Deploy > New deployment
 *    - Click the gear icon ⚙️ next to "Select type"
 *    - Choose: Web app
 *    - Set:
 *      • Description: "Divine Notice API v1"
 *      • Execute as: Me (your email)
 *      • Who has access: Anyone
 *    - Click: Deploy
 *    - Authorize the script when prompted
 *    - Click: Advanced > Go to Divine Notice API (unsafe) > Allow
 * 
 * 7. COPY DEPLOYMENT URL:
 *    - Copy the Web app URL (looks like):
 *      https://script.google.com/macros/s/DEPLOYMENT_ID/exec
 *    - Add this URL to your .env.local as GOOGLE_APPS_SCRIPT_URL
 * 
 * ================================================================
 * COPY THE CODE BELOW INTO GOOGLE APPS SCRIPT EDITOR
 * ================================================================
 */

// ============================================
// CONFIGURATION
// ============================================
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // ← REPLACE THIS!
const SHEET_NAME = 'Notices'; // Sheet tab name

// ============================================
// GET REQUEST HANDLER
// ============================================
function doGet(e) {
  // Handle direct execution from Apps Script editor
  if (!e || !e.parameter) {
    return createResponse(true, 'API is working. Use ?action=getAll to fetch notices.');
  }
  
  const action = e.parameter.action;
  
  try {
    if (action === 'getAll') {
      return getAllNotices();
    } else if (action === 'get') {
      return getNotice(e.parameter.id);
    }
    
    return createResponse(false, 'Invalid action. Use ?action=getAll or ?action=get&id=ID');
  } catch (error) {
    return createResponse(false, error.toString());
  }
}

// ============================================
// POST REQUEST HANDLER
// ============================================
function doPost(e) {
  // Handle missing event object
  if (!e || !e.parameter || !e.postData) {
    return createResponse(false, 'Invalid request. POST data required.');
  }
  
  const action = e.parameter.action;
  const data = JSON.parse(e.postData.contents);
  
  try {
    if (action === 'create') {
      return createNotice(data);
    } else if (action === 'update') {
      return updateNotice(data);
    } else if (action === 'delete') {
      return deleteNotice(data.id);
    }
    
    return createResponse(false, 'Invalid action');
  } catch (error) {
    return createResponse(false, error.toString());
  }
}

// ============================================
// GET ALL NOTICES
// ============================================
function getAllNotices() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  // Skip header row
  const notices = data.slice(1).map(row => ({
    id: row[0],
    title: row[1],
    link: row[2],
    date: row[3],
    category: row[4],
    active: row[5]
  }));
  
  return createResponse(true, 'Success', notices);
}

// ============================================
// GET SINGLE NOTICE BY ID
// ============================================
function getNotice(id) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      const notice = {
        id: data[i][0],
        title: data[i][1],
        link: data[i][2],
        date: data[i][3],
        category: data[i][4],
        active: data[i][5]
      };
      return createResponse(true, 'Success', notice);
    }
  }
  
  return createResponse(false, 'Notice not found');
}

// ============================================
// CREATE NEW NOTICE
// ============================================
function createNotice(data) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const id = Utilities.getUuid();
  
  sheet.appendRow([
    id,
    data.title,
    data.link,
    data.date || new Date().toISOString().split('T')[0],
    data.category,
    data.active !== undefined ? data.active : true
  ]);
  
  return createResponse(true, 'Notice created successfully', { id });
}

// ============================================
// UPDATE EXISTING NOTICE
// ============================================
function updateNotice(data) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const dataValues = sheet.getDataRange().getValues();
  
  for (let i = 1; i < dataValues.length; i++) {
    if (dataValues[i][0] === data.id) {
      sheet.getRange(i + 1, 2).setValue(data.title);
      sheet.getRange(i + 1, 3).setValue(data.link);
      sheet.getRange(i + 1, 4).setValue(data.date);
      sheet.getRange(i + 1, 5).setValue(data.category);
      sheet.getRange(i + 1, 6).setValue(data.active);
      
      return createResponse(true, 'Notice updated successfully');
    }
  }
  
  return createResponse(false, 'Notice not found');
}

// ============================================
// DELETE NOTICE
// ============================================
function deleteNotice(id) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      sheet.deleteRow(i + 1);
      return createResponse(true, 'Notice deleted successfully');
    }
  }
  
  return createResponse(false, 'Notice not found');
}

// ============================================
// HELPER: CREATE JSON RESPONSE
// ============================================
function createResponse(success, message, data = null) {
  const response = {
    success: success,
    message: message
  };
  
  if (data !== null) {
    response.data = data;
  }
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================
// TEST FUNCTION - Run this from Apps Script editor
// ============================================
function testScript() {
  // Test if Sheet connection works
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const rowCount = sheet.getLastRow();
    Logger.log('✅ Sheet connection successful!');
    Logger.log('Sheet name: ' + sheet.getName());
    Logger.log('Total rows (including header): ' + rowCount);
    
    // Test creating a sample notice
    const testNotice = {
      title: 'Test Notice',
      content: 'This is a test notice created by the test function.',
      date: new Date().toISOString().split('T')[0],
      category: 'Academic',
      active: true
    };
    
    Logger.log('');
    Logger.log('To test the API, deploy the script and use these URLs:');
    Logger.log('GET all notices: YOUR_URL?action=getAll');
    Logger.log('');
    Logger.log('✅ Test completed successfully!');
    
  } catch (error) {
    Logger.log('❌ Error: ' + error.toString());
    Logger.log('');
    Logger.log('Please check:');
    Logger.log('1. SHEET_ID is correct');
    Logger.log('2. Sheet tab is named "Notices"');
    Logger.log('3. You have access to the sheet');
  }
}

// ============================================
// END OF SCRIPT
// ============================================

/**
 * TESTING THE SCRIPT:
 * ===================
 * 
 * After deploying, test with these URLs:
 * 
 * 1. Get all notices:
 *    YOUR_DEPLOYMENT_URL?action=getAll
 * 
 * 2. Get single notice:
 *    YOUR_DEPLOYMENT_URL?action=get&id=NOTICE_ID
 * 
 * Replace YOUR_DEPLOYMENT_URL with your actual deployment URL.
 * 
 * 
 * API ENDPOINTS:
 * ==============
 * 
 * GET Requests:
 * - ?action=getAll        → Returns all notices
 * - ?action=get&id=ID     → Returns single notice
 * 
 * POST Requests:
 * - ?action=create        → Creates new notice
 * - ?action=update        → Updates existing notice
 * - ?action=delete        → Deletes notice
 * 
 * 
 * RESPONSE FORMAT:
 * ================
 * 
 * Success:
 * {
 *   "success": true,
 *   "message": "Success",
 *   "data": [...]
 * }
 * 
 * Error:
 * {
 *   "success": false,
 *   "message": "Error message"
 * }
 * 
 * 
 * TROUBLESHOOTING:
 * ================
 * 
 * 1. "Script not found" error:
 *    - Check deployment is set to "Anyone" access
 *    - Verify you're using the correct deployment URL
 * 
 * 2. "Sheet not found" error:
 *    - Verify SHEET_ID is correct
 *    - Verify sheet tab name is "Notices"
 * 
 * 3. No data returned:
 *    - Check Google Sheet has the correct column headers
 *    - Verify data is in the correct format
 * 
 * 4. Authorization errors:
 *    - Re-authorize the script in Apps Script settings
 *    - Check execution logs: Apps Script editor > Executions
 * 
 * 
 * NEXT STEPS:
 * ===========
 * 
 * After deploying this script:
 * 1. Copy the deployment URL
 * 2. Add it to your .env.local:
 *    GOOGLE_APPS_SCRIPT_URL="your_deployment_url_here"
 * 3. Restart your Next.js dev server
 * 4. Test the dashboard at /admin/notices
 * 
 */
