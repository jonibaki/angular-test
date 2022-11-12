import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './main/shopping-app/Header/header/header.component';
import { ShoppingListComponent } from './main/shopping-app/Shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './main/shopping-app/Shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './main/shopping-app/RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './main/shopping-app/RecipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './main/shopping-app/RecipeBook/recipe-detail/recipe-detail.component';
import { GameControlComponent } from './main/even-odd-app/game-control/game-control.component';
import { OddComponent } from './main/even-odd-app/odd/odd.component';
import { EvenComponent } from './main/even-odd-app/even/even.component';
import { ActiveUserComponent } from './main/server-app/active-user/active-user.component';
import { InactiveUserComponent } from './main/server-app/inactive-user/inactive-user.component';
import { CreateUserComponent } from './main/server-app/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ActiveUserComponent,
    InactiveUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
