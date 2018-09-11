import { Component, Input } from "@angular/core";

@Component({
    selector:"page",
    templateUrl:"src/modules/share/components/layouts/page.html"
})
export class Page{
    @Input() title:string;
}