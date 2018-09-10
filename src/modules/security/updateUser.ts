import { Component } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./userService";

@Component({
    templateUrl:"src/modules/security/updateUser.html"
})
export class UpdateUser{
    public userId: string;
    public user:any={};
    private userService: UserService;
    private router: Router;
    constructor(activatedRoute: ActivatedRoute, userService: UserService, router:Router){
        this.userService=userService;
        this.router=router;
        this.userId= activatedRoute.params["value"].userId;
        let self=this;
        userService.getUser(this.userId).then((user: any)=>{
            self.user=user;
        })
    }

    public onSaveClicked():void{
        let self =this;
        let updateUserREquest={
            userName:this.user.userName,
            firstName:this.user.firstName,
            lastName: this.user.lastName
        };
        this.userService.save(this.user.id,  updateUserREquest).then(()=>{
            self.router.navigate(["security/users"]);
        });
        
    }
}