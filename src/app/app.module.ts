import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/appheader.component';
import { AppRecipesComponent } from './app-recipes/app-recipes.component';
import { AppRecipeDetailComponent } from './app-recipes/app-recipe-detail/app-recipe-detail.component';
import { AppRecipeListComponent } from './app-recipes/app-recipe-list/app-recipe-list.component';
import { AppRecipeItemComponent } from './app-recipes/app-recipe-list/app-recipe-item/app-recipe-item.component';
import { AppShoppingComponent } from './app-shopping/app-shopping.component';
import { AppShoppingEditComponent } from './app-shopping/app-shopping-edit/app-shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRecipeListComponent,
    AppHeaderComponent,
    AppRecipesComponent,
    AppShoppingComponent,
    AppRecipeDetailComponent,
    AppRecipeItemComponent,
    AppShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
