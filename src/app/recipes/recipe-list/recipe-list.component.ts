import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Cheesecake", "A soft New-York style cheesecake", "https://upload.wikimedia.org/wikipedia/commons/7/7c/New_York_Cheesecake_with_Blueberries.jpg"),
    new Recipe("More cheesecake", "A soft Lviv style cheesecake", "https://upload.wikimedia.org/wikipedia/commons/7/7c/New_York_Cheesecake_with_Blueberries.jpg"),
    new Recipe("Some cheesecake", "A soft LA style cheesecake", "https://upload.wikimedia.org/wikipedia/commons/7/7c/New_York_Cheesecake_with_Blueberries.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
