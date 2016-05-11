import {Component} from 'angular2/core';
import {RecipesComponent} from "./recipe-book/recipes.component";
import {RouteConfig} from "angular2/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

@Component({
    selector: 'app',
    template: `
       <header>
            <nav>
                <ul>
                    <li><a>Recipes</a></li>
                    <li><a>Shopping List</a></li>
                </ul>
            </nav>
       </header>
       <div class="main">
            <my-recipes></my-recipes>
       </div>
    `,
    directives: [RecipesComponent, ShoppingListComponent]
})
@RouteConfig([
    {path: '/recipes', name: 'Recipes', component: RecipesComponent, useAsDefault: true},
    {path: '/shopping-list', name: 'ShoppingList', component: ShoppingListComponent }
])
export class AppComponent {

}
