import {Component, OnInit} from '@angular/core';
import {BV_XANHPHON, BVE_VM, XANH_PHON} from "../../../data/data-info";

@Component({
    selector: 'app-bv-xanhphon-info',
    templateUrl: './bv-xanhphon-info.component.html',
    styleUrls: ['./bv-xanhphon-info.component.scss']
})
export class BvXanhphonInfoComponent implements OnInit {

    constructor() {
    }

    user = XANH_PHON;
    serverPhysical = BV_XANHPHON;

    ngOnInit(): void {
    }


}
