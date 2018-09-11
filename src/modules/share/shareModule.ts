import { NgModule } from "@angular/core";
import {IconEdit} from "./icons/edit";
import {IconAdd} from "./icons/add";
import {Page} from "./components/layouts/page";
import {ContentPlaceHolder} from "./components/containers/contentPlaceHolder";
import {CommandPlaceHolder} from "./components/common/commandPlaceHolder";
@NgModule({
    declarations:[
        IconEdit, IconAdd,
        Page, ContentPlaceHolder, CommandPlaceHolder
    ],
    exports:[
        IconEdit,IconAdd,
         Page, ContentPlaceHolder, CommandPlaceHolder
    ]
})
export class ShareModule{}