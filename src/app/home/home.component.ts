import { Component, OnInit, Input } from '@angular/core';
import { EquationService } from '../services/equation.service';
import { KatexOptions } from 'ng-katex';
import html2canvas from 'html2canvas';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faDownload = faDownload;

  unknownValue = null;
  isMathml = false;
  result = null;
  options: KatexOptions;
  latexDataUrl: string;

  constructor(private equationService: EquationService) {}

  ngOnInit() {}

  onCalculationClick() {
    if (this.unknownValue !== null) {
      this.options = {
        displayMode: false,
        output: this.isMathml ? 'mathml' : 'html'
      };
      console.log(this.options);
      this.result = this.equationService.processEquation(
        parseInt(this.unknownValue, 10)
      );
    }
  }

  onSaveAsClick() {
    const data = document.getElementById('texEquation');
    if (this.isMathml) {
    } else {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const heightLeft = imgHeight;

        this.latexDataUrl = canvas.toDataURL('image/png');
      });
    }
  }
}
