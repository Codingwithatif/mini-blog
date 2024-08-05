import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BannerComponent } from "../../components/banner/banner.component";
import { LatestArticlesComponent } from "../../articles/latest-articles/latest-articles.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BannerComponent, LatestArticlesComponent, FooterComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
