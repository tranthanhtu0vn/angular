import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"form-button",
    template:`<button type="button" class="btn {{cls}}" (click)="onClicked.emit($event)">{{label}}</button>`
})
export class FormButton{
    @Input() label:string;
    @Input() cls:string="btn-default";
    @Output() onClicked: EventEmitter<any>=new EventEmitter();
}