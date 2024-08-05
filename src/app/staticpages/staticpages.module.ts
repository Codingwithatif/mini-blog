import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent
  ]
})
export class StaticpagesModule { }
