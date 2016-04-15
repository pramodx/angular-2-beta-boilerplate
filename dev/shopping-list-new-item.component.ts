import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from "./list-item";


@Component({
	selector: 'shopping-list-new-item',
	template: `
		<div class="input">
			<label for="item-name" >Name</label>
			<input type="text" id="item-name" [(ngModel)]="item.name">
		</div>
		<div class="input">
			<label for="item-amt" >Name</label>
			<input type="text" id="item-amt" [(ngModel)]="item.amount">
		</div>
		<button (click)="onClick()">Add Item</button>
	`,
	outputs: ['itemAdded']
})

export class ShoppingListNewItemCompoenent {
	item = {name:'', amount:''};
	itemAdded = new EventEmitter<ListItem>();

	onClick(){
		this.itemAdded.emit(this.item);
	}
}
