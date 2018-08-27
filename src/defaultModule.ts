import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DefaultPage} from "./defaultPage";
@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations:[DefaultPage],
    bootstrap:[DefaultPage]
})
export class DefaultModule{

}