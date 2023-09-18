import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { BusinessInforComponent } from './components/sections/business-infor/business-infor.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { ResponsiveLayoutComponent } from './shared/responsive-layout/responsive-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    BusinessInforComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ResponsiveLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
