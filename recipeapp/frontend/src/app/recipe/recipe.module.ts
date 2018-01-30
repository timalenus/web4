import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDataService } from './recipe-data.service';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';

const routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'add-recipe', component: AddRecipeComponent }
];

@NgModule({
  declarations: [
    RecipeComponent,
    IngredientComponent,
    AddRecipeComponent,
    RecipeListComponent,
    RecipeFilterPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [RecipeDataService]
})
export class RecipeModule {}
