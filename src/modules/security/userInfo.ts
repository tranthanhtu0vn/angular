import { Component, Input, Output, EventEmitter } from "@angular/core";
import {UserService} from "./userService";

@Component({
    selector:"user-info",
    templateUrl:"src/modules/security/userInfo.html"
})
export class UserInfo{
    @Input() firstName: any;
    @Output() firstNameChange: EventEmitter<string> = new EventEmitter();
    constructor(userService: UserService){
        console.log("User Info:", userService.getUsers());
    }

    public onSaveClicked():void{
        this.firstNameChange.emit(this.firstName);
    }
}
// injector = parent injector + provider