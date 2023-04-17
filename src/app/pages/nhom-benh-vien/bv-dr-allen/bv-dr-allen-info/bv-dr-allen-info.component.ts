import {Component, OnInit} from '@angular/core';
import {BV_Allen, BVE_VM} from "../../../data/data-info";

@Component({
    selector: 'app-bv-dr-allen-info',
    templateUrl: './bv-dr-allen-info.component.html',
    styleUrls: ['./bv-dr-allen-info.component.scss']
})
export class BvDrAllenInfoComponent implements OnInit {

    constructor() {
    }

    user = BV_Allen
    serverPhysical = BVE_VM;

    ngOnInit(): void {
    }


}
