import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {UserInfo} from "./userInfo";
import {Users} from "./users";
import {UserService} from "./userService";
import {LocalUserService} from "./localUserService";
import {UpdateUser} from "./updateUser";
import { CommonModule } from "@angular/common";
import {ShareModule} from "../share/shareModule";
import { HttpModule } from "@angular/http";
let routes: Routes=[
    {path:"", redirectTo:"users", pathMatch:"full"},
    {path:"users", component: Users},
    {path:"users/:userId/edit", component: UpdateUser}
];
@NgModule({
    imports:[HttpModule, CommonModule, FormsModule, RouterModule.forChild(routes), ShareModule],
    providers:[
        UserService
    ],
    declarations:[UserInfo, Users, UpdateUser]
})
export class SecurityModule{

}
