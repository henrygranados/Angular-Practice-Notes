import { Component  } from "@angular/core";

@Component({
    selector: 'event-binding',
    template: `
        <div (click) = onDivClicked()>
        <button (click) = 'onSave($event)'>Save</button>
        </div>
    `
})

export class EvenBindingComponent {

    onSave(e){
    console.log(e);
    e.stopPropagation();
    console.log('Button was clicked!');
    }

    onDivClicked(){
    console.log("Div was clicked"); // This is called Event Bubbling  - To solve it we use e.stopPropagation()
    }
}