import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from "./list-item";
import {ShoppingListService} from "./shopping-list.service";


@Component({
	selector: 'shopping-list-new-item',
	template: `
		<div class="input">
			<label for="item-name" >Name</label>
			<input type="text" id="item-name" [(ngModel)]="item.name">
		</div>
		<div class="input">
			<label for="item-amt" >Amount</label>
			<input type="text" id="item-amt" [(ngModel)]="item.amount">
		</div>
		<button (click)="onClick()">Add Item</button>
	`,

})

export class ShoppingListNewItemCompoenent {
	item = {name:'', amount:''};
	itemAdded = new EventEmitter<ListItem>();

	constructor(private _shoppingListService: ShoppingListService) {}

	onClick(){
		this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
	}
}
