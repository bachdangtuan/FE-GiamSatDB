import {Component, OnInit} from '@angular/core';
import {BV_DT, BVE_VM} from "../../../data/data-info";

@Component({
    selector: 'app-bv-dt-info',
    templateUrl: './bv-dt-info.component.html',
    styleUrls: ['./bv-dt-info.component.scss']
})
export class BvDtInfoComponent implements OnInit {

    constructor() {
    }

    user = BV_DT;
    serverPhysical = BVE_VM;

    ngOnInit(): void {
    }

}
