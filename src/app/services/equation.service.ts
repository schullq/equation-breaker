import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquationService {

  sampleTeXEquation = [
    '-1 \\times \\frac{i \\times \\sqrt{64}}{8} \\times \\sqrt{i^2}',
    'n^{22}',
    '\\frac{n!}{k!(n-k)!}',
    '\\frac{\\frac{1}{x}+\\frac{1}{y}}{y-z}',
    '^3/_7',
    '\\sqrt[n]{1+x+x^2+x^3+\\dots+x^n}',
    '\\sum_{i=1}^{10} t_i',
    '\\int_0^\\infty \\mathrm{e}^{-x}\\,\\mathrm{d}x',
    '\\left(\\frac{x^2}{y^3}\\right)',
    '50 apples \\times 100 apples = lots of apples^2'
  ];

  constructor() { }

  processEquation(value: number): string {
    const brokenNumber = this.breakNumber(value);
    let equations = [];
    for (let nbr of brokenNumber) {
      equations.push(this.sampleTeXEquation[parseInt(nbr) - 1]);
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
