import { Component } from "@angular/core";
import { RESTConnector } from "../share/providers/connector/restConnector";

@Component({
    templateUrl:"src/modules/setting/appSettings.html"
})
export class AppSettings{
    /**
     *
     */
    constructor(rest: RESTConnector) {
        console.log("this is from appsetting page:", rest);
    }
}