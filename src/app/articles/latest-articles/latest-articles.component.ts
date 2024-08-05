
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-latest-articles',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './latest-articles.component.html',
  styleUrl: './latest-articles.component.css'
})
export class LatestArticlesComponent {

}
