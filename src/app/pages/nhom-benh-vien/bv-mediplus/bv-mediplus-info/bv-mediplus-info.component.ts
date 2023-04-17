import {Component, OnInit} from '@angular/core';
import {BV_MDP, BVE_MDP, BVE_VM} from "../../../data/data-info";

@Component({
    selector: 'app-bv-mediplus-info',
    templateUrl: './bv-mediplus-info.component.html',
    styleUrls: ['./bv-mediplus-info.component.scss']
})
export class BvMediplusInfoComponent implements OnInit {

    constructor() {
    }

    user = BV_MDP
    serverPhysical = BVE_MDP;

    ngOnInit(): void {
    }

}
