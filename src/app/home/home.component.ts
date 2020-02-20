import { Component, OnInit, Input } from '@angular/core';
import { EquationService } from '../services/equation.service';
import { KatexOptions } from 'ng-katex';
import domtoimage from 'dom-to-image';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';

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

  constructor(private equationService: EquationService) {}

  ngOnInit() {}

  onCalculationClick() {
    if (this.unknownValue !== null) {
      this.options = {
        displayMode: true,
        output: this.isMathml ? 'mathml' : 'html'
      };
      this.result = this.equationService.processEquation(
        parseInt(this.unknownValue, 10)
      );
    }
  }

  onSaveAsClick() {
    const data = document.getElementById('texEquation');
    domtoimage
      .toSvg(data, {
        bgcolor: '#FFFFFF'
      })
      .then(dataUrl => {
        let link = document.createElement('a');
        link.download = 'my-image-name.svg';
        link.href = dataUrl;
        link.click();
      });
  }
}
