import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSortingDemo extends LightningElement {
    headings=["Id", "Name", "Title", "Email"]
    fullTableData=[];
    filteredData=[];
    timer
    filterBy="Name"
    sortedBy="Name"
    sortDirection="asc"
    @wire(getContactList)
    contactHandler({data, error})
    {
        if(data)
        {
            console.log(data)
            this.fullTableData=data;
            this.filteredData=[...this.sortby(data)];
        }
        if(error)
        {
            console.error(error)
        }
    }
    get FilterByOptions(){
        return [
            {label:"All", value:'All'},
            {label:"Id", value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Title', value:'Title'},
            {label:'Email', value:'Email'}
        ]
    }
    get sortByOptions(){
        return [
            {label:"Id", value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Title', value:'Title'},
            {label:'Email', value:'Email'}
        ]
    }
    filterbyHandler(event)
    {
        this.filterBy = event.target.value
        
    }
    filterHandler(event)
    {
        const {value} = event.target
        window.clearTimeout(this.timer);
        if(value)
        {
            //this timer can be used to prevent calling 
            //this method multiple time while user typing in input field
            //it is called as debounce technique
            this.timer = window.setTimeout(()=>{
                this.filteredData = this.fullTableData.filter(eachobj => {
                    if(this.filterBy==='All')
                    {
                        /**Below logic will filter each and every property of object */
                        return Object.keys(eachobj).some(key =>{
                                return eachobj[key].toLowerCase().includes(value)
                            })
                    }
                    else{
                        /**Below logic will filter only selected fields */
                        const val = eachobj[this.filterBy] ? eachobj[this.filterBy] : ''
                        return val.toLowerCase().includes(value)
                    }                   
                })
            },500)
            
        }
        else
        {
            this.filteredData = [...this.fullTableData]
        }
    }
    sortbyHandler(event)
    {
        this.sortedBy = event.target.value
        this.filteredData = [...this.sortby(this.filteredData)]
    }
    sortby(data){
        const cloneData = [...data]
        cloneData.sort((a,b)=>{
            if(a[this.sortedBy] === b[this.sortedBy]){
                return 0
            }
            return this.sortDirection === 'desc' ? 
            a[this.sortedBy] > b[this.sortedBy] ? -1:1 :
            a[this.sortedBy] < b[this.sortedBy] ? -1:1
        })
        return cloneData
    }
}