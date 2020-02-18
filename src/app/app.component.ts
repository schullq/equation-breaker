import { Component, Input } from '@angular/core';
import { EquationService } from './services/equation.service';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equation-breaker';

  @Input()
  unknownValue: string;

  result: string;
  options: KatexOptions = {
    displayMode: true,
    output: 'mathml'
  };
  constructor(private equationService: EquationService) {}

  onCalculationClick() {
    this.result = this.equationService.processEquation(parseInt(this.unknownValue));
  }
}
