import {Component, OnInit} from '@angular/core';
import {BVE_VM, YTCC} from "../../../data/data-info";

@Component({
    selector: 'app-bv-ytcc-info',
    templateUrl: './bv-ytcc-info.component.html',
    styleUrls: ['./bv-ytcc-info.component.scss']
})
export class BvYtccInfoComponent implements OnInit {

    constructor() {
    }

    user = YTCC;
    serverPhysical = BVE_VM;

    ngOnInit(): void {
    }

}
