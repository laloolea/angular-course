import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn:'root'})
export class DataStorageService {
    constructor(private http: HttpClient,private recipesService:RecipeService,private authService:AuthService){

    }
    //Post
    storeRecipes(){
        const recipes =this.recipesService.getRecipes();
        this.http.put('https://firstproject-6ff30-default-rtdb.firebaseio.com/recipes.json',recipes)
            .subscribe(response=>{
                console.log(response);
            });
    }
    //Get
    fetchRecipes(){
        
        return this.http.get<Recipe[]>(
            'https://firstproject-6ff30-default-rtdb.firebaseio.com/recipes.json?'
        )
        .pipe(
            map(recipes=>{ //Rxjs operator map
                return recipes.map(recipe=>{
                    return {
                        ...recipe,
                        ingredients:recipe.ingredients ? recipe.ingredients: []
                    };
                });//On Array normal map methor javascript
            }),
            tap(recipes=>{  
                this.recipesService.setRecipes(recipes);
            })
        );
       
    

    }

}