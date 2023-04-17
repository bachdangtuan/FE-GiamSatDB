import {Component, OnInit} from '@angular/core';
import {BVE_INFO, BVE_VM, ISOFH_VM} from "../../../data/data-info";

@Component({
    selector: 'app-bv-e-info',
    templateUrl: './bv-e-info.component.html',
    styleUrls: ['./bv-e-info.component.scss']
})
export class BvEInfoComponent implements OnInit {

    constructor() {
    }


    user = BVE_INFO;
    serverPhysical = BVE_VM;

    ngOnInit(): void {
    }

}
