
const XLSX = require('xlsx');
const path = require('path');


export function readExcelData() {
  const excelPath = path.join(__dirname,'../data/EnterLocality.xlsx'    );
  const workbook = XLSX.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet);
}

