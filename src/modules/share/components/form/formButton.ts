import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"form-button",
    templateUrl:"src/modules/share/components/form/formButton.html"
})
export class FormButton{
  @Input() label:string;  
  @Output() onClicked:EventEmitter<string>=new EventEmitter();
  public onButtonClicked():void{
      this.onClicked.emit();
  }
}