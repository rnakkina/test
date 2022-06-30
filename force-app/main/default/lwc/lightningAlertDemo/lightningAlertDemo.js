import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
export default class LightningAlertDemo extends LightningElement {
    alertHandler(event)
    {
        const {name} = event.target  //destructuring
        LightningAlert.open({
            message: 'This is the alert message.',
            //variant:'headerless',  // this is used to hide the header, try with async and await options from dev book
            label: `${name} Alert header!`,
            theme: name,
        }).then(result=>{ 
            let x = 2
            let y = 3
            this.add(x,y)
          }) 
    }
    add(a,b){
        console.log(a+b)
      }
}