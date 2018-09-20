import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {UserInfo} from "./userInfo";
import {Users} from "./users";
import {UserService} from "./userService";
import {AddOrUpdateUser} from "./addOrUpdateUser";
import { CommonModule } from "@angular/common";
import {ShareModule} from "../share/shareModule";
import { HttpModule } from "@angular/http";
let routes: Routes=[
    {path:"", redirectTo:"users", pathMatch:"full"},
    {path:"users", component: Users},
    {path:"users/:userId/edit", component: AddOrUpdateUser},
    {path:"users/add", component: AddOrUpdateUser}
];
@NgModule({
    imports:[HttpModule, CommonModule, FormsModule, RouterModule.forChild(routes), ShareModule.forChild()],
    providers:[
        UserService
    ],
    declarations:[UserInfo, Users, AddOrUpdateUser]
})
export class SecurityModule{
}
