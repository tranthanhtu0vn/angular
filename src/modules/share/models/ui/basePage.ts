import { ResourceManager } from "../resourceManager";

export class BasePage{
    protected i18n:any;
    constructor(){
        this.i18n=ResourceManager.i18n;
    }
}