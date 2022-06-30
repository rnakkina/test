import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import LVL_FLD from '@salesforce/schema/contact.Level__c'
import ID_FLD from '@salesforce/schema/contact.Id'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ClosedAction extends LightningElement {
    @api recordId
    @api invoke()
    {
        const fields = {}
        fields[ID_FLD.fieldApiName] = this.recordId;
        fields[LVL_FLD.fieldApiName] = 'Primary';
        const recordInput = {fields:fields}
        updateRecord(recordInput).then(()=>{
            this.showtoast('success !','contact level is updated','success');
        }).catch((error)=>{
            this.showtoast('error !',error.messgae,'error');
        })
    }
    showtoast(title, message, variant)
    {

        const evt= new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        })
        this.dispatchEvent(evt)
    }
}