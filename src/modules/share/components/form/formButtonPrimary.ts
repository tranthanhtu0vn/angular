import { Component } from "@angular/core";
import { FormButton } from "./formButton";

@Component({
    selector:"form-button-primary",
    template:`<form-button [cls]=cls (onClicked)=onButtonClicked($event) [label]=label></form-button>` 
})
export class FormButtonPrimary extends FormButton{
    constructor(){
        super();
        this.cls="btn-primary";
    }
    public onButtonClicked():void{
        this.onClicked.emit();
    }
}