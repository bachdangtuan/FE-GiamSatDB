import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  exportToExcel(data: any[], filename: string): void {
    // Thêm hàng mặc định vào mảng dữ liệu
    const defaultRow = {
      'Ngày Check': moment().utcOffset(7).format('DD/MM/YYYY, HH:MM'),
      'Người thực hiện':'Bạch Đăng Tuấn'
    };
    data.unshift(defaultRow);

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['Dữ liệu check'] };
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




  // exportToExcel(data: any[], filename: string): void {
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveAsExcelFile(excelBuffer, filename);
  // }
  //
  // private saveAsExcelFile(buffer: any, filename: string): void {
  //   const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
  //   const url: string = window.URL.createObjectURL(data);
  //   const link: HTMLAnchorElement = document.createElement('a');
  //   link.href = url;
  //   link.download = filename + '.xlsx';
  //   link.click();
  //   window.URL.revokeObjectURL(url);
  //   link.remove();
  // }
}
