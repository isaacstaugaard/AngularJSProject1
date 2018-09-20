import { Component, OnInit } from '@angular/core';
import { Recipe } from '../app-recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './app-recipe-list.component.html',
  styleUrls: ['./app-recipe-list.component.css']
})
export class AppRecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  	new Recipe("Pancakes with syrup", "A hearty breakfast", "www.theworktop.com/wp-content/uploads/2017/02/Blueberry-Vegan-Pancakes-1.jpg"),
  	new Recipe("Pancakes with syrup", "A hearty breakfast", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVAva5_DsXh80xmNQ0YDbfEiITX2AExAtx3btwS1FVHQQZvwb")
  ];


  constructor() { }

  ngOnInit() {
  }

}
