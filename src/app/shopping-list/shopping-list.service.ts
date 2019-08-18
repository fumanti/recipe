import { Ingredient } from '../shared/ingredient.model';
import { Injectable, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService implements OnInit {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        // new Ingredient('Apples', 5),
        // new Ingredient('Tomatoes', 10),
      ];

     ngOnInit(): void {
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(i: Ingredient) {
        this.addIngredients([i]);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.getIngredients());
    }

}
