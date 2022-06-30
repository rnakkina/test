import { LightningElement, wire } from 'lwc';
import {getRelatedListsInfo} from 'lightning/uiRelatedListApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetRelatedListsInfoDemo extends LightningElement {
    relatedlistsData
    @wire(getRelatedListsInfo, {parentObjectApiName: 'Account'
        })listrelatedData({data, error})
        {
            if(data)
            {
                console.log(JSON.stringify(data))
                this.relatedlistsData = data.relatedLists
            }
            if(error)
            {
                console.error(error)
            }
        }
}