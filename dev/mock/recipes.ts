import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";

export let RECIPES: Recipe[] = [
	new Recipe(
		'Roast duck, cherry & couscous salad',
		'This quick and easy duck salad is perfect for a busy weeknight, with juicy orange flavours and the rich, savoury taste of duck.',
		'http://www.taste.com.au/images/recipes/tm/2013/12/roast-duck-cherry-couscous-salad-26821_l.jpeg',
		[
			new Ingredient('Duck', 1),
			new Ingredient('Pearl Couscous', 125),
			new Ingredient('Olive Oil', 1)
		]
	),
	new Recipe(
		'Pasta Carbonara',
		'This speedy carbonara is proudly brought to you by Campbell\'s Real Stock and Taste.com.au.',
		'http://www.taste.com.au/images/recipes/tas/2014/09/pasta-carbonara-30570_l.jpeg',
		[
			new Ingredient('Pasta', 380),
			new Ingredient('Panacetta', 120),
			new Ingredient('Onions', 1),
			new Ingredient('Eggs', 2)
		]
	),
	new Recipe(
		'Cauliflower Cheese Tart',
		'Turn cauliflower cheese into this creamy tart that the whole family will enjoy.',
		'http://www.taste.com.au/images/recipes/del/2015/08/cauliflower-cheese-tart-33451_l.jpeg',
		[
			new Ingredient('Flour', 150),
			new Ingredient('Eggs', 3),
			new Ingredient('Cauliflower', 1),
			new Ingredient('Olive Oil', 1),
			new Ingredient('Onion', 1)
		]
	)
];