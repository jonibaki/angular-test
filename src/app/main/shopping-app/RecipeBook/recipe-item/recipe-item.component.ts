import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../Model/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() public recipeOut: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipeList:Recipe[]=[];

  constructor() { }

  ngOnInit(): void {
    this.recipeList.push(new Recipe('Potato', 12, 'Pot', 'assets/icon/potato.png'));
    this.recipeList.push(new Recipe('Orange', 12, 'Pot', 'assets/icon/potato.png'));
    this.recipeList.push(new Recipe('Meat', 12, 'Pot', 'assets/icon/potato.png'));
    this.recipeList.push(new Recipe('Rice', 12, 'Pot', 'assets/icon/potato.png'));
    this.recipeList.push(new Recipe('Milk', 12, 'Pot', 'assets/icon/potato.png'));
  }
  
  public onSingleRecipeClick(recipe: Recipe) 
  {
    console.log(recipe);
    this.recipeOut.emit(recipe); 
  }

}
