import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DefaultPage} from "./defaultPage";
import {UserInfo} from "./userInfo";
@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations:[DefaultPage, UserInfo],
    bootstrap:[DefaultPage]
})
export class DefaultModule{

}