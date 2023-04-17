import {Component, OnInit} from '@angular/core';
import {BVE_VM, DHY} from "../../../data/data-info";

@Component({
    selector: 'app-bv-daihoc-y-info',
    templateUrl: './bv-daihoc-y-info.component.html',
    styleUrls: ['./bv-daihoc-y-info.component.scss']
})
export class BvDaihocYInfoComponent implements OnInit {

    constructor() {
    }

    user = DHY
    serverPhysical = BVE_VM;

    ngOnInit(): void {
    }


}
