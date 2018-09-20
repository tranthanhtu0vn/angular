import { NgModule, ModuleWithProviders } from "@angular/core";
import {IconEdit} from "./icons/edit";
import {IconAdd} from "./icons/add";
import {Page} from "./components/layouts/page";
import {ContentPlaceHolder} from "./components/containers/contentPlaceHolder";
import {CommandPlaceHolder} from "./components/common/commandPlaceHolder";

import {FormHorizontal} from "./components/form/formHorizontal";
import {FormTextInput} from "./components/form/formTextInput";
import {FormButton} from "./components/form/formButton";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {RESTConnector} from "./providers/connector/restConnector";
import { HttpModule } from "@angular/http";
@NgModule({
    imports:[FormsModule, CommonModule, HttpModule],
    declarations:[
        IconEdit, IconAdd,
        Page, ContentPlaceHolder, CommandPlaceHolder,
        FormHorizontal, FormTextInput, FormButton
    ],
    exports:[
        IconEdit,IconAdd,
         Page, ContentPlaceHolder, CommandPlaceHolder,
         FormHorizontal, FormTextInput, FormButton
    ]
})
export class ShareModule{
    public static forRoot():ModuleWithProviders{
        return {
            ngModule: ShareModule,
            providers:[RESTConnector]
        };
    }

    public static forChild():ModuleWithProviders{
        return {
            ngModule: ShareModule,
            providers:[]
        };
    }
}