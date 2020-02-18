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

  @Input()
  isMathml = false;

  result: string;
  options: KatexOptions = {
    displayMode: true,
    output: this.isMathml ? 'mathml' : 'html'
  };
  constructor(private equationService: EquationService) {}

  onCalculationClick() {
    console.log(this.isMathml);
    console.log(this.options);
    this.result = this.equationService.processEquation(parseInt(this.unknownValue));
  }

  onCheckboxChange() {
    this.options = {
      displayMode: true,
      output: this.isMathml ? 'mathml' : 'html'
    };
  }
}
