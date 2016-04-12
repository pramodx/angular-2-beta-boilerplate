    import {Component, EventEmitter} from 'angular2/core';

    @Component({
        selector: 'my-input',
        template: `
            <h1>Your details</h1>
            <div>
                <label for="name">
                    Name: <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyUp()"/>
                </label>
            </div>
            <div>
                <label for="age">
                    Age: <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyUp()"/>
                </label>
            </div>
            <p>Filled out?: {{isFilled ? 'Yes' : 'No'}}</p>
            <p>Valid?: {{isValid ? 'Yes' : 'No'}}</p>
            <button [disabled] = "!isValid" (click)="onSubmit()">Submit</button>
    
        `,
        inputs: ['myself'],
        outputs: ['submitted']
    })

    export class InputComponent {
        myself = {name: '', age: ''};
        isFilled = false;
        isValid = false;
        submitted = new EventEmitter<{name: string, age: string}>()

        onKeyUp(){
            if (this.myself.name != '' && this.myself.age != ''){
                this.isFilled = true;
            } else {
                this.isFilled = false;
            }

            if (this.myself.name != '' && /^\d+$/.test(this.myself.age)){
                this.isValid = true;
            } else {
                this.isValid = false;
            }
        }

        onSubmit(){
            this.submitted.emit(this.myself)
        }
    }