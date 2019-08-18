import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
    constructor (private shoppingListService: ShoppingListService) {}
    selected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Insalata fresca',
            'Un tipico piatto estivo',
            'http://marlacucina.it/wp-content/uploads/2012/08/insalata-greca-originale-500x380.jpeg',
            [ new Ingredient('Lattuga', 1), new Ingredient('Feta', 2)]
        ),
        new Recipe(
            'Pizza al formaggio',
            'Un gusto tradizionale',
            'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2017/04/pizza-di-riso.jpg',
            [new Ingredient('Pasta', 1), new Ingredient('Mozzarella', 2)]
            )
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
