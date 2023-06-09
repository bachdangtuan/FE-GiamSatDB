import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  exportToExcel(data: any[], filename: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.sheet_add_json({}, data, { origin: 'A1' });
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, filename);
  }

  private saveAsExcelFile(buffer: any, filename: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url: string = window.URL.createObjectURL(data);
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = url;
    link.download = filename + '.xlsx';
    link.click();
    window.URL.revokeObjectURL(url);
    link.remove();
  }

}
