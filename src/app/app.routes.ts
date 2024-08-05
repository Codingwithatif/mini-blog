import { Routes } from '@angular/router';
import { AboutUsComponent } from './staticpages/about-us/about-us.component';
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { HomeComponent } from './staticpages/home/home.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { CategoriesComponent } from './articles/categories/categories.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';


export const routes: Routes = [

{
  path: '',
  component: HomeComponent

},
    {
path: 'home',
component: HomeComponent,
  pathMatch: 'full'

    },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  
  },

  {path:'articles',component:ArticleListComponent},
 
  { path: 'article/:id', component: ArticleDetailsComponent }
];
