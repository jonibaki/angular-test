import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../Shopping/Model/ingredient';
import { Recipe } from '../Model/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() public recipeOut: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipeList: Recipe[] = [];
  ingredient:Ingredient[] =[
  new Ingredient('Meat', 12, 'This is an item to be eaten with something delicious', 'assets/icon/potato.png'),
  new Ingredient('Rice', 12, 'This is an item to be eaten with something delicious', 'assets/icon/potato.png'),
  new Ingredient('Milk', 12, 'This is an item to be eaten with something delicious', 'assets/icon/potato.png'),]
  ingredient2:Ingredient[] =[new Ingredient('Potato', 12, 'This is an item to be eaten with something delicious','assets/icon/potato.png'),
  new Ingredient('Orange', 12, 'This is an item to be eaten with something delicious','assets/icon/potato.png'),
  new Ingredient('Meat', 12, 'This is an item to be eaten with something delicious', 'assets/icon/potato.png'),]

  constructor() { }

  ngOnInit(): void {
    this.recipeList.push(new Recipe('Chicken Curry', 'This is an item to be eaten with something delicious', this.ingredient, 'assets/icon/potato.png'));
    this.recipeList.push(new Recipe('Rogan Josh', 'This is an item to be eaten with something delicious',  this.ingredient, 'assets/icon/potato.png'));
    this.recipeList.push(new Recipe('Meat Buna', 'This is an item to be eaten with something delicious',  this.ingredient2, 'assets/icon/potato.png'));
    this.recipeList.push(new Recipe('Lamb Briyani', 'This is an item to be eaten with something delicious',  this.ingredient2, 'assets/icon/potato.png'));
    this.recipeList.push(new Recipe('Milk Shake', 'This is an item to be eaten with something delicious', this.ingredient2, 'assets/icon/potato.png'));
  }

  public onSingleRecipeClick(recipe: Recipe) {
    this.recipeOut.emit(recipe);
  }

}