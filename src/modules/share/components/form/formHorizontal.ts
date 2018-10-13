import { Component } from "@angular/core";

@Component({
    selector:"form-horizontal",
    templateUrl:"src/modules/share/components/form/formHorizontal.html"
})
export class FormHorizontal{}

@Component({
    selector:"form-buttons",
    template:"<ng-content></ng-content>"
})
export class FormButtonsContainer{}