import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppSettings} from "./appSettings";
import { ShareModule } from "../share/shareModule";

let routes: Routes=[
    {path:"", redirectTo:"appSettings", pathMatch:"full"},
    {path:"appSettings", component: AppSettings}
];
@NgModule({
    imports:[CommonModule, FormsModule, RouterModule.forChild(routes), ShareModule.forChild()],
    declarations:[AppSettings]
})
export class SettingModule{

}
