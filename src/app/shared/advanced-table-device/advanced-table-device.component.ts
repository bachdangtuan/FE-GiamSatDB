import {
  Component,
  ComponentFactoryResolver,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import {Column} from "../../core/models/common.models";
import {SortEvent} from "../advanced-table/sortable.directive";
import {AdvancedTableServices} from "../advanced-table/advanced-table-service.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-advanced-table-device',
  templateUrl: './advanced-table-device.component.html',
  styleUrls: ['./advanced-table-device.component.scss']
})
export class AdvancedTableDeviceComponent implements OnInit {


  @ContentChild("theHeaders")
  theHeaders!: TemplateRef<any> | null;

  @ContentChild("theContent")
  theContent!: TemplateRef<any> | null;

  // @Input() columns: Column[] = [];
  @Output() pageChange = new EventEmitter();
  @Input() limit: any;
  @Input() page: any;
  @Input() totalItems: any;

  @Input() columns: Column[] = [];
  @Input() pagination: boolean = false;
  @Input() isSearchable: boolean = false;
  @Input() isSortable: boolean = false;
  @Input() pageSizeOptions: number[] = [];
  @Input() tableData: any[] = [];
  // @Input() tableClasses: string = '';
  // @Input() theadClasses: string = '';
  @Input() hasRowSelection: boolean = false;
  @Output() search = new EventEmitter<string>();
  @Output() sort = new EventEmitter<SortEvent>();
  @Output() handleTableLoad = new EventEmitter<any>();

  selectAll: boolean = false;
  isSelected: boolean[] = [];


  constructor(public service: AdvancedTableServices, private sanitizer: DomSanitizer, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {

  }
}
