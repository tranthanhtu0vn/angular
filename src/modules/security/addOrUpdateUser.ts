import { Component } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./userService";

@Component({
    templateUrl:"src/modules/security/addOrUpdateUser.html"
})
export class AddOrUpdateUser{
    public userId: string;
    public user:any={
        firstName:"",
        lastName:"",
        userName:""
    };
    private userService: UserService;
    private router: Router;
    constructor(activatedRoute: ActivatedRoute, userService: UserService, router:Router){
        this.userService=userService;
        this.router=router;
        this.userId= activatedRoute.params["value"].userId;
        if(!this.userId){return;}
        let self=this;
        userService.getUser(this.userId).then((user: any)=>{
            self.user=user;
        })
    }
    public onCancelClicked(ev: any):void{
        let self=this;
        self.router.navigate(["security/users"]);
    }

    public onSaveClicked():void{
        let self =this;
        let request={
            userName:this.user.userName,
            firstName:this.user.firstName,
            lastName: this.user.lastName
        };
        if(!this.userId){
            this.userService.create(request).then(()=>{
                self.router.navigate(["security/users"]);
            });
            return;    
        }
        this.userService.save(this.userId,  request).then(()=>{
            self.router.navigate(["security/users"]);
        });
        
    }
}