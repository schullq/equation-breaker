import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { EquationService } from './services/equation.service';
import { OnlyDigitDirective } from './shared/only-digit.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

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
    FontAwesomeModule
  ],
  providers: [EquationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
