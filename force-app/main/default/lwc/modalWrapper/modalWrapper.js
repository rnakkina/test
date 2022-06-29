import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {
    isOpen = false;
    isOpensecond = false;
    openHandler()
    {
        this.isOpen = true;
    }
    closeHandler()
    {
        this.isOpen = false;
    }
    opensecondHandler()
    {
        this.isOpensecond = true;
    }
    closesecondHandler()
    {
        this.isOpensecond = false;
    }
}