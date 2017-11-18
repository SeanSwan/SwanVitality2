import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';





const appRoutes: Routes = [ 
  {path: '', component:HomeComponent},
  {path:'videos', component:VideosComponent},
  {path:'packages', component:PackagesComponent},
  {path:'about', component:AboutComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideosComponent,
    HomeComponent,
    FooterComponent,
    PackagesComponent,
    AboutComponent,
    

  ],
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
