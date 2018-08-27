import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"user-info",
    templateUrl:"src/userInfo.html"
})
export class UserInfo{
    @Input() firstName: any;
    @Output() firstNameChange: EventEmitter<string> = new EventEmitter();

    public onSaveClicked():void{
        this.firstNameChange.emit(this.firstName);
    }
}