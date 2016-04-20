import {Component, EventEmitter, OnInit} from 'angular2/core';
import {ListItem} from "./list-item";
import {ShoppingListService} from "./shopping-list.service";
import {ControlGroup, FormBuilder, Validators, Control} from "angular2/common";

@Component({
	selector: 'shopping-list-new-item',
	template: `
		<form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
			<div class="input">
				<label for="item-name" >Name</label>
				<input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']">
			</div>
			<div class="input">
				<label for="item-amt" >Amount</label>
				<input type="text" id="item-amt" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']">
			</div>
			<button type="submit" [disabled]="!myForm.valid">Add Item</button>
		</form>		
	`,

})

export class ShoppingListNewItemCompoenent implements OnInit{
	item = {name:'', amount:''};
	itemAdded = new EventEmitter<ListItem>();
	myForm: ControlGroup;

	constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) {}

	onSubmit(){
		this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
	}

	ngOnInit():any {
		this.myForm  = this._formBuilder.group({
			'itemName': ['', Validators.required],
			'itemAmount': ['',Validators.compose([
				Validators.required,
				greaterThanZero
			])]
		})
	}
}

function greaterThanZero(control: Control) : {[s:string]: boolean}{
	if (control.value <=0 ){
		return {notEnough: true}
	}
}
