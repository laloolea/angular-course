import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  private subscription:Subscription;
  constructor(private slService:ShoppingListService,private loggingService:LoggingService) { }

  ngOnInit() {
    this.ingredients= this.slService.getIngredients();
    this.subscription=this.slService.ingredientsChanged
      .subscribe(
        (ingredients:Ingredient[])=>{
          this.ingredients= ingredients
        }
      )

    this.loggingService.printLog("Hellpo from ShoppingList Component ngOnInit!");
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index);
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
