import { Component } from "@angular/core";
import {UserService} from "./userService";
@Component({
    selector:"users",
    templateUrl:"src/users.html"
})
export class Users{
    public users:Array<any>=[];
    public selectedItem: any;
    public firstName:string;
    constructor(userService: UserService){
        console.log("Users:", userService.getUsers());
        this.users=userService.getUsers();
    }
    public onInfoClicked(user: any):void{
        this.firstName=user.firstName;
        this.selectedItem=user;
        console.log(user);
    }
}
// injector = parent injector + provider