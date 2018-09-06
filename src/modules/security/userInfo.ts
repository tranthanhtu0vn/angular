import { Component, Input, Output, SimpleChanges, OnChanges, OnInit } from "@angular/core";
import {UserService} from "./userService";

class BaseControl implements OnChanges{
    ngOnChanges(changes: SimpleChanges): void{
        for(let pro in changes){
            if(!changes.hasOwnProperty(pro)){continue;}
            let eventHandlerName ="on"+pro+"Changed";
            if(!this[eventHandlerName]){continue;}
            this[eventHandlerName](changes[pro].currentValue);
        }
    }
}

@Component({
    selector:"user-info",
    templateUrl:"src/modules/security/userInfo.html"
})
export class UserInfo extends BaseControl implements OnInit {
    public user: any;
    @Input() userId: any;
    private userService: UserService;
    constructor(userService: UserService){
        super();
        this.userService=userService;
    }
    public ngOnInit(){
        this.user=this.userService.getUser(this.userId);
    }
    // public onuserIdChanged(newVal:string):void{
    //     this.user=this.userService.getUser(newVal);
    // }
}

