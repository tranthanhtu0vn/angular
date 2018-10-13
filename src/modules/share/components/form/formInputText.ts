import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector:"form-input-text",
    templateUrl:"src/modules/share/components/form/formInputText.html"
})
export class FormInputText{
    @Input() label:string;
    @Input() model: any;
    @Output() modelChange: EventEmitter<any> = new EventEmitter();

    public onValueChanged():void{
        this.modelChange.emit(this.model);
    }

}