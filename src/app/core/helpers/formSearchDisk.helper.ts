import {FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";
import {SearchLogParams} from "../models/form-search-log.model";

@Injectable({
    providedIn: "root",
})
export class FormSearchDiskHelper {
    readonly #form: FormGroup;

    constructor() {
        this.#form = FormSearchDiskHelper.initForm();
    }

    get form() {
        return this.#form as FormGroup;
    }

    private static initForm(data?: SearchLogParams): FormGroup {
        return new FormGroup({
            page: new FormControl(data?.page || 1),
            limit: new FormControl(data?.limit || 10),
            virtual_id: new FormControl(data?.virtual_id),
        });
    }
}
