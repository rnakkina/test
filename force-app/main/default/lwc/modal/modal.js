import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {

    clickHandler()
    {
        this.dispatchEvent(new CustomEvent('close'))
    }
    slotfooterHandler()
    {
        const footerelem = this.template.querySelector('.slds-modal__footer')
        if(footerelem)
        {
            footerelem.classList.remove('slds-hide')
        }
    }
    slotheaderHandler()
    {
        const footerelem = this.template.querySelector('.slds-modal__header')
        if(headerelem)
        {
            headerelem.classList.remove('remove_header')
        }
    }
}