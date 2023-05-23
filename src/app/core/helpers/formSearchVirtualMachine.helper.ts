import {FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";
import {SearchLogParams} from "../models/form-search-log.model";

@Injectable({
    providedIn: "root",
})
export class FormSearchVirtualMachineHelper {
    readonly #form: FormGroup;

    constructor() {
        this.#form = FormSearchVirtualMachineHelper.initForm();
    }

    get form() {
        return this.#form as FormGroup;
    }

    private static initForm(data?: SearchLogParams): FormGroup {
        return new FormGroup({
            page: new FormControl(data?.page || 1),
            limit: new FormControl(data?.limit || 8),
            nameVirtual: new FormControl(data?.nameVirtual ),
        });
    }
}
