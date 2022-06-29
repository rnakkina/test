import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate
    endDate
    error
    dateHandler(event)
    {
        const {name, value} = event.target
        // this is same as this.startDate = value
        this[name] = value
    }
    submitHandler()
    {
        if(this.validatedate(this.startDate, this.endDate))
        {
            console.log('date is valid')
        }
        else{
            this.error = 'start date can not be greater than end date'
        }
    }
    validatedate(startDate, endDate)
    {
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    }
}