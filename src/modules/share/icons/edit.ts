import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"icon-edit",
    templateUrl:"src/modules/share/icons/edit.html"
})
export class IconEdit{
    @Output() onClicked: EventEmitter<any>=new EventEmitter();
    public onIconClicked():void{
        this.onClicked.emit();
    }
}