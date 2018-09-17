import { Component, Input, Output, EventEmitter } from "@angular/core";
import { EventManager } from "@angular/platform-browser";

@Component({
    selector:"form-text-input",
    templateUrl:"src/modules/share/components/form/formTextInput.html"
})
export class FormTextInput{
  @Input() label:string;  
  @Input() model:string;
  @Output() modelChange:EventEmitter<string> = new EventEmitter();
  public onValueChanged():void{
      this.modelChange.emit(this.model);
  }
}