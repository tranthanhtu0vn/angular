import {Component} from "@angular/core";
@Component({
    selector:"default-page",
    templateUrl:"src/defaultPage.html"
})
export class DefaultPage{
    public users:Array<any>=[];
    public selectedUser: any;
    public firstName:string;
    constructor(){
        this.users=[
            {firstName:"TU", lastName:"Tran", userName:"tu.tran"},
            {firstName:"TU1", lastName:"Tran", userName:"tu.tran1"}
        ];
    }
    public onInfoClicked(user: any):void{
        this.firstName=user.firstName;
        this.selectedUser=user;
        console.log(user);
    }
}