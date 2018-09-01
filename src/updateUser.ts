import { Component } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./userService";

@Component({
    templateUrl:"src/updateUser.html"
})
export class UpdateUser{
    public userId: string;
    public user:any;
    private userService: UserService;
    private router: Router;
    constructor(activatedRoute: ActivatedRoute, userService: UserService, router:Router){
        this.userService=userService;
        this.router=router;
        this.userId= activatedRoute.params["value"].userId;
        this.user=userService.getUser(this.userId);
    }

    public onSaveClicked():void{
        this.userService.save(this.user);
        this.router.navigate(["users"]);
    }
}