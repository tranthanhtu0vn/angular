import {Component} from "@angular/core";
import {UserService} from "./userService";
@Component({
    selector:"default-page",
    templateUrl:"src/defaultPage.html"
    //providers:[UserService]
})
export class DefaultPage{
    // public users:Array<any>=[];
    // public selectedItem: any;
    // public firstName:string;
    // constructor(userService: UserService){
      //   console.log("Default page:", userService.getUsers());
    //     //let userService : UserService = new UserService();
    //     this.users=userService.getUsers();
    //     // this.users=[
    //     //     {firstName:"TU", lastName:"Tran", userName:"tu.tran"},
    //     //     {firstName:"TU1", lastName:"Tran", userName:"tu.tran1"}
    //     // ];
     //}
    // public onInfoClicked(user: any):void{
    //     this.firstName=user.firstName;
    //     this.selectedItem=user;
    //     console.log(user);
    // }
}