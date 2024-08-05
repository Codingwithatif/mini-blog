
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FeaturedArticlesComponent } from "../featured-articles/featured-articles.component";
import { CategoriesComponent } from "../categories/categories.component";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FeaturedArticlesComponent, CategoriesComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

}
