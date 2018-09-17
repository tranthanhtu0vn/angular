import { NgModule } from "@angular/core";
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
@NgModule({
    imports:[FormsModule, CommonModule],
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
export class ShareModule{}