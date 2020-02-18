import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { EquationService } from './services/equation.service';
import { OnlyDigitDirective } from './shared/only-digit.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyDigitDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    KatexModule
  ],
  providers: [EquationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
