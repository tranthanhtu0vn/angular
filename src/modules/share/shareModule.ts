import { NgModule, ModuleWithProviders } from "@angular/core";
import {IconEdit} from "./icons/edit";
import {IconAdd} from "./icons/add";
import {Page} from "./components/layouts/page";
import {ContentPlaceHolder} from "./components/containers/contentPlaceHolder";
import {CommandPlaceHolder} from "./components/common/commandPlaceHolder";
import {FormHorizontal, FormButtonsContainer} from "./components/form/formHorizontal";
import {FormInputText} from "./components/form/formInputText";
import {FormButton} from "./components/form/formButton";
import {FormButtonPrimary} from "./components/form/formButtonPrimary";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {ResourceManager} from "./models/resourceManager";
import {Validation} from "./components/validation";
@NgModule({
    imports:[FormsModule, HttpModule],
    declarations:[
        Validation,
        IconEdit, IconAdd,
        Page, ContentPlaceHolder, CommandPlaceHolder,
        FormHorizontal, FormButtonsContainer, FormInputText, FormButton, FormButtonPrimary
    ],
    exports:[
        Validation, 
        IconEdit,IconAdd,
        Page, ContentPlaceHolder, CommandPlaceHolder,
        FormHorizontal, FormButtonsContainer, FormInputText, FormButton, FormButtonPrimary
    ]
})
export class ShareModule{
    public static forRoot():ModuleWithProviders{
        return {
            ngModule: ShareModule,
            providers:[ResourceManager]
        };
    }

    public static forChild():ModuleWithProviders{
        return {
            ngModule: ShareModule,
            providers:[]
        };
    }
}