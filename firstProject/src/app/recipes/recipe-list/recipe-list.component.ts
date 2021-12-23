import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe("Sushi","A very tasty Japanese recipe","https://cdn.dribbble.com/users/2532154/screenshots/5335283/media/37266057842300c208df874094c1f45f.png?compress=1&resize=1600x1200"),
    new Recipe("Onigiri","Another very tasty Japanese recipe","https://www.clipartmax.com/png/middle/22-221628_wasabi-onigiri-cartoon.png")     
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
