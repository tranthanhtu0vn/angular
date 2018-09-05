export class ArrayHelper{
    public static firstOrDefault(items: Array<any>, callback: (item: any)=>boolean):any{
        let result;
        if(!items){return result;}
        items.forEach((item: any)=>{
            if(callback(item)){
                result=item;
                return;
            }
        });
        return result;
    }
}