import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    { 
      id: 'r1',
      title: 'Pancakes',
      imageUrl: 'https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ingredients: ['1 ½ cups all-purpose flour', '3 ½ teaspoons baking powder','1 teaspoon salt']
    },
    { 
      id: 'r2',
      title: 'Pizza',
      imageUrl: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ingredients: ['1 ½ cups all-purpose Pizza', '3 ½ teaspoons baking pizza','1 teaspoon pizza']
    },
  ];
  
  constructor() { }

  getAllRecipes() {
    return this.recipes;
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
    
  }
}
