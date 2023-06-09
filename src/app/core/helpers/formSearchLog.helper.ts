import {FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";
import {SearchLogParams} from "../models/form-search-log.model";

@Injectable({
    providedIn: "root",
})
export class FormSearchLogHelper {
    readonly #form: FormGroup;

    constructor() {
        this.#form = FormSearchLogHelper.initForm();
    }

    get form() {
        return this.#form as FormGroup;
    }

    private static initForm(data?: SearchLogParams): FormGroup {
        return new FormGroup({
            page: new FormControl(data?.page || 1),
            limit: new FormControl(data?.limit || 6),
            hostName: new FormControl(data?.hostName ),
            nameDatabase: new FormControl(data?.nameDatabase),
            // type: new FormControl(data?.type || [""]),
        });
    }
}
