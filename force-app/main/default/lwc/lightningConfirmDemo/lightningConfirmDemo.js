import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';
export default class LightningConfirmDemo extends LightningElement {

    async confirmHandler(){
        const result =  await LightningConfirm.open({
           message:"Would you like to refresh the page",
           label:"Are you sure?", 
           //variant:"headerless", // use  this for hiding the header
           theme:"warning" // success->green, warning->orange, error->red, info ->grey
         })
         console.log(result)
         // on click of ok result will be true else false
         if(result){ 
           location.reload()
         }
       }
        // if you add async and await statments then on click of okay boolean true will be returned
        // so code will handle like this const result = LightningConfirm.open({...}) if(result){ do some op like location.reload()}

}