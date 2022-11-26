import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../Shopping/Model/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  @Input()ingredientList: Ingredient[];
  singleIngredient: Ingredient = {} as Ingredient;

  ngOnInit(): void {
  }
  onSingleIngredientClick(ingredient: Ingredient){
    this.singleIngredient = ingredient;
  }

}
