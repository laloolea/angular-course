import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();
    recipeSelected= new EventEmitter<Recipe>();
    // private recipes:Recipe[]=[
    //     new Recipe("Sushi",
    //     "A very tasty Japanese recipe",
    //     "https://cdn.dribbble.com/users/2532154/screenshots/5335283/media/37266057842300c208df874094c1f45f.png?compress=1&resize=1600x1200",
    //     [
    //         new Ingredient("Rice",3),
    //         new Ingredient("Salmon",1),
    //         new Ingredient("Wasabi",1)
    //     ]),
    //     new Recipe("Onigiri",
    //     "Another very tasty Japanese recipe",
    //     "https://www.clipartmax.com/png/middle/22-221628_wasabi-onigiri-cartoon.png",
    //     [
    //         new Ingredient("Rice",3),
    //         new Ingredient("Nori",1),
    //         new Ingredient("Furikake",1)
    //     ])     
    // ];
    private recipes:Recipe[]=[];
    constructor(private slService:ShoppingListService){}
    
    setRecipes(recipes: Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }
    
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index:number){
        return this.recipes[index];
    }    
    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}