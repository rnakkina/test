import { LightningElement, wire } from 'lwc';
import { getRelatedListCount } from 'lightning/uiRelatedListApi';
export default class GetRelatedListDemo extends LightningElement {

    countData
    @wire(getRelatedListCount, {parentRecordId:'001Jb000002Jd13IAC' , relatedListId: 'Contacts',})
    listCountHandler({data, error})
    {
        if(data)
        {
            console.log(JSON.stringify(data))
            this.countData = data;
        }
        if(error)
        {
            console.error(error)
        }
    }
}