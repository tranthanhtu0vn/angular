import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DefaultPage} from "./defaultPage";
import {UserInfo} from "./userInfo";
import {Users} from "./users";
import {UserService} from "./userService";
import {LocalUserService} from "./localUserService";
import {UpdateUser} from "./updateUser";

let routes: Routes=[
    {path:"", redirectTo:"users", pathMatch:"full"},
    {path:"users", component: Users},
    {path:"users/:userId/edit", component: UpdateUser}
];
@NgModule({
    imports:[BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers:[
        {provide: UserService, useClass: LocalUserService}
    ],
    declarations:[DefaultPage, UserInfo, Users, UpdateUser],
    bootstrap:[DefaultPage]
})
export class DefaultModule{

}
