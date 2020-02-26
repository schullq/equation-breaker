import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { EquationService } from './services/equation.service';
import { OnlyDigitDirective } from './shared/only-digit.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    OnlyDigitDirective,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    KatexModule,
    NoopAnimationsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EquationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
