import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquationService {

  sampleTeXEquation = [
    '0',
    '-1\\times\\frac{i\\times\\sqrt{64}}{8}\\times\\sqrt{i^2}',
    '\\exp{\\frac{\\sqrt{988} \\times \\ln{1}}{67^7}} + \\frac{10}{\\sqrt{\\sqrt{10000}}}',
    '\\int y\\, \\mathrm{d}x',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];

  constructor() { }

  processEquation(value: number): string {
    const brokenNumber = this.breakNumber(value);
    let equations = [];
    for (const nbr of brokenNumber) {
      equations.push(this.sampleTeXEquation[parseInt(nbr)]);
    }
    return equations.join('+');
  }

  private breakNumber(value: number): string[] {
    let list = [];
    for (let i = 0; value >= 10; i++) {
      const nbr = Math.floor((Math.random() * 9) + 1);
      value -= nbr;
      list.push(nbr);
    }
    list.push(value);
    return list;
  }
}
