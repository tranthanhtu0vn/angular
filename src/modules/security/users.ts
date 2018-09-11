import { Component } from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "./userService";
@Component({
    selector:"users",
    templateUrl:"src/modules/security/users.html"
})
export class Users{
    public users:Array<any>=[];
    public selectedItem: any;
    public firstName:string;
    private router: Router;
    constructor(userService: UserService, router: Router){
        this.router=router;
        let self=this;
        userService.getUsers().then((users: any)=>{
            self.users=users;
        });
    }
    public onCreateUserClicked():void{
        this.router.navigate(["/security/users/add"]);
    }
    public onInfoClicked(user: any):void{
        this.firstName=user.firstName;
        this.selectedItem=user;
        console.log(user);
    }
    public onEditUserClicked(user: any):void{
        this.router.navigate(["/security/users/"+ user.id+"/edit"]);
        ///users/1/edit
    }
    public onRouteActivated(route: any){
        console.log("do something");
    }
}
// injector = parent injector + provider