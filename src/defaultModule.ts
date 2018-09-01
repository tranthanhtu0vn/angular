import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DefaultPage} from "./defaultPage";
import {UserInfo} from "./userInfo";
import {Users} from "./users";
import {UserService} from "./userService";
import {LocalUserService} from "./localUserService";
@NgModule({
    imports:[BrowserModule, FormsModule],
    providers:[
        {provide: UserService, useClass: LocalUserService}
    ],
    declarations:[DefaultPage, UserInfo, Users],
    bootstrap:[DefaultPage]
})
export class DefaultModule{

}