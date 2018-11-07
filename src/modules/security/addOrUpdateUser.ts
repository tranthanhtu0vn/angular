import { Component } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./userService";
import {BasePage} from "../share/models/ui/basePage";
import { ResourceManager } from "../share/models/resourceManager";
import {Language} from "../share/models/enum";

@Component({
    templateUrl:"src/modules/security/addOrUpdateUser.html"
})
export class AddOrUpdateUser extends BasePage{
    public userId: string;
    public user:any={
        firstName:"",
        lastName:"",
        userName:""
    };
    private userService: UserService;
    private router: Router;
    private resourceManager:ResourceManager
    constructor(activatedRoute: ActivatedRoute, userService: UserService, router:Router, rm: ResourceManager){
        super();
        this.userService=userService;
        this.router=router;
        this.resourceManager=rm;
        this.userId= activatedRoute.params["value"].userId;
        if(!this.userId){return;}
        let self=this;
        userService.getUser(this.userId).then((user: any)=>{
            self.user=user;
        })
    }
    public onChangeLanguageClicked():void{
        let language = ResourceManager.language==Language.EN?Language.VN: Language.EN;
        this.resourceManager.reload(language);
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