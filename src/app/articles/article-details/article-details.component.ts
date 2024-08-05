import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CategoriesComponent } from "../categories/categories.component";
import { FeaturedArticlesComponent } from "../featured-articles/featured-articles.component";

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, CategoriesComponent, FeaturedArticlesComponent],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent {

}
