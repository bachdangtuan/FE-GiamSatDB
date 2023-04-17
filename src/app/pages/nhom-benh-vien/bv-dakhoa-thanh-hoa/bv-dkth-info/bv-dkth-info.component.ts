import {Component, OnInit} from '@angular/core';
import {BVE_VM, DKTH} from "../../../data/data-info";

@Component({
    selector: 'app-bv-dkth-info',
    templateUrl: './bv-dkth-info.component.html',
    styleUrls: ['./bv-dkth-info.component.scss']
})
export class BvDkthInfoComponent implements OnInit {

    constructor() {
    }

    user = DKTH;
    serverPhysical = BVE_VM;


    ngOnInit(): void {
    }


}
