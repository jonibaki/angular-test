import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../Shopping/Model/ingredient';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() ingredient: Ingredient;
  constructor() { }

  ngOnInit(): void {
  }

}
