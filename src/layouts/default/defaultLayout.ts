import { NgModule } from "@angular/core";
import {Layout} from "./layout";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ShareModule } from "../../modules/share/shareModule";

let routes:Routes=[
    {path:"", redirectTo:"security", pathMatch:"full"},
    {path:"security", loadChildren:"src/modules/security/securityModule#SecurityModule"},
    {path:"setting", loadChildren:"src/modules/setting/settingModule#SettingModule"}
];
@NgModule({
    imports:[BrowserModule, FormsModule, RouterModule.forRoot(routes), ShareModule.forRoot()],
    declarations:[Layout],
    bootstrap:[Layout]
})
export class DefaultLayout{}