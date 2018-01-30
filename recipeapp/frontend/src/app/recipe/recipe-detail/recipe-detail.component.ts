import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';
import { Recipe } from '../recipe.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  private _recipe: Recipe;
  public errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private recipeDataService: RecipeDataService
  ) {}

  get recipe(): Recipe {
    return this._recipe;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeDataService.getRecipe(id).subscribe(
      item => {
        console.log(item);
        this._recipe = item;
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve recipe with id ${id}: ${error.error}`;
      }
    );
  }
}
