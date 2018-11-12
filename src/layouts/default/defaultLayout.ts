import { NgModule, ApplicationRef, Injector } from "@angular/core";
import {Layout} from "./layout";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ShareModule } from "../../modules/share/shareModule";
import {ResourceManager} from "../../modules/share/models/resourceManager";
import iocRegistrations from "../../config/ioc";
import iocHelper from "../../modules/share/ioc/iocHelper";
let routes:Routes=[
    {path:"", redirectTo:"security", pathMatch:"full"},
    {path:"security", loadChildren:"src/modules/security/securityModule#SecurityModule"},
    {path:"setting", loadChildren:"src/modules/setting/settingModule#SettingModule"}
];
@NgModule({
    imports:[BrowserModule, FormsModule, RouterModule.forRoot(routes), ShareModule.forRoot()],
    declarations:[Layout],
    entryComponents:[Layout]
    //bootstrap:[Layout]
})
export class DefaultLayout{
    private resourceManager: ResourceManager;
    private injector: Injector;
    constructor(rm: ResourceManager, injector: Injector){
        this.resourceManager=rm;
        this.injector = injector;
    }
    public ngDoBootstrap(app: ApplicationRef){
        iocHelper.initialize(iocRegistrations, this.injector);
        this.resourceManager.load(["security", "common"]).then(()=>{
            app.bootstrap(Layout);
        });
        
    }
}