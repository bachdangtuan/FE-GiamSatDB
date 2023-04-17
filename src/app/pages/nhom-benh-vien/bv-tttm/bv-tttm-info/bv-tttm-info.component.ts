import {Component, OnInit} from '@angular/core';
import {BVE_VM, TTTM_INFO} from "../../../data/data-info";

@Component({
    selector: 'app-bv-tttm-info',
    templateUrl: './bv-tttm-info.component.html',
    styleUrls: ['./bv-tttm-info.component.scss']
})
export class BvTttmInfoComponent implements OnInit {

    constructor() {
    }

    user = TTTM_INFO
    serverPhysical = BVE_VM;

    ngOnInit(): void {
    }

}
