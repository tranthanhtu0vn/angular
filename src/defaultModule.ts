import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DefaultPage} from "./defaultPage";
@NgModule({
    imports:[BrowserModule],
    declarations:[DefaultPage],
    bootstrap:[DefaultPage]
})
export class DefaultModule{

}