import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../Shopping/Model/ingredient';
import { Recipe } from '../Model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public ingredientList: Ingredient[];
  ngOnInit(): void {
  }

  onSingleRecipeClick(recipe: Recipe)
  {
    this.ingredientList =[];
    this.ingredientList = recipe.ingredients;
    console.log(this.ingredientList);
  }

}
