// const XLSX = require('xlsx');
// const path = require('path');
function readExcelData() {
  // Excel file path
  const excelPath = path.join(__dirname, '..', 'data', 'EnterLocality.xlsx');

  // Read the workbook
  const workbook = XLSX.readFile(excelPath);

  // Get first sheet
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON
  const data = XLSX.utils.sheet_to_json(sheet);

  return data;
}