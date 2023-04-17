import {Component, OnInit} from '@angular/core';
import {ISOFH_INFO, ISOFH_VM} from "../../data/data-info";

@Component({
    selector: 'app-isofh-systems',
    templateUrl: './isofh-systems.component.html',
    styleUrls: ['./isofh-systems.component.scss']
})
export class IsofhSystemsComponent implements OnInit {

    constructor() {
    }


    serverPhysical = ISOFH_VM
    user = ISOFH_INFO

    ngOnInit(): void {
    }

}
