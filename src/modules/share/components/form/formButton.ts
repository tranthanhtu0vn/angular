import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"form-button",
<<<<<<< HEAD
    templateUrl:"src/modules/share/components/form/formButton.html"
})
export class FormButton{
  @Input() label:string;  
  @Output() onClicked:EventEmitter<string>=new EventEmitter();
  public onButtonClicked():void{
      this.onClicked.emit();
  }
=======
    template:`<button type="button" class="btn {{cls}}" (click)="onClicked.emit($event)">{{label}}</button>`
})
export class FormButton{
    @Input() label:string;
    @Input() cls:string="btn-default";
    @Output() onClicked: EventEmitter<any>=new EventEmitter();
>>>>>>> feature/improve_form_component
}