import { Component } from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "./userService";
@Component({
    selector:"users",
    templateUrl:"src/users.html"
})
export class Users{
    public users:Array<any>=[];
    public selectedItem: any;
    public firstName:string;
    private router: Router;
    constructor(userService: UserService, router: Router){
        this.router=router;
        this.users=userService.getUsers();
    }
    public onInfoClicked(user: any):void{
        this.firstName=user.firstName;
        this.selectedItem=user;
        console.log(user);
    }
    public onEditUserClicked(user: any):void{
        this.router.navigate(["/users/"+ user.id+"/edit"]);
        ///users/1/edit
    }
    public onRouteActivated(route: any){
        console.log("do something");
    }
}
// injector = parent injector + provider