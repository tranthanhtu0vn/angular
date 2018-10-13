import { NgModule } from "@angular/core";
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
@NgModule({
    imports:[FormsModule],
    declarations:[
        IconEdit, IconAdd,
        Page, ContentPlaceHolder, CommandPlaceHolder,
        FormHorizontal, FormButtonsContainer, FormInputText, FormButton, FormButtonPrimary
    ],
    exports:[
        IconEdit,IconAdd,
        Page, ContentPlaceHolder, CommandPlaceHolder,
        FormHorizontal, FormButtonsContainer, FormInputText, FormButton, FormButtonPrimary
    ]
})
export class ShareModule{}