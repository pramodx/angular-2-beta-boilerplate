import {Injectable} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {RECIPES} from "../mock/recipes";

@Injectable()
export class RecipeService {
	getRecipes(){
		return RECIPES;
	}

	getRecipe(index: number){
		return RECIPES[index];
	}

	getRecipeIndex(item: Recipe){
		return RECIPES.indexOf(item);
	}

	insertRecipe(item: Recipe) {
		return RECIPES.push(item);
	}

	deleteRecipe(index: number){
		return RECIPES.splice(index, 1);
	}

	updateRecipe(index: number, item: Recipe){
		RECIPES[index] = item;
	}
}