import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"icon-add",
    templateUrl:"src/modules/share/icons/add.html"
})
export class IconAdd{
    @Output() onClicked: EventEmitter<any>=new EventEmitter();
    public onIconClicked():void{
        this.onClicked.emit();
    }
}