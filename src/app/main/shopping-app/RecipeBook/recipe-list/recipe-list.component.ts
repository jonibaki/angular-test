import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipe: Recipe = {} as Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onSingleRecipeClick(recipe: Recipe)
  {
    this.recipe = recipe;
  }

}
