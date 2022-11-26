import { Injectable } from "@angular/core";
import { Ingredient } from "../../Shopping/Model/ingredient";

@Injectable({ providedIn: "root" })
export class Recipe {
    name: string;
    description: string;
    photo?: string;
    ingredients: Ingredient[];
    constructor(name: string,description: string, ingredients: Ingredient[], photo?: string) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.photo = photo;
    }
}