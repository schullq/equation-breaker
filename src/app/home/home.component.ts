import { Component, OnInit, Input } from '@angular/core';
import { EquationService } from '../services/equation.service';
import { KatexOptions } from 'ng-katex';
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgName = "YourEquation";

  unknownValue = null;
  isMathml = false;
  result = null;
  options: KatexOptions;

  onSaveCallback: (data: HTMLElement) => void;

  constructor(private equationService: EquationService) {}

  ngOnInit() {
    this.onImgTypeChange('');
  }

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

  onImgTypeChange(type: string) {
    console.log(type);
    switch (type) {
      case 'png':
        this.onSaveCallback = data =>
        domtoimage
          .toPng(data, {
            bgcolor: '#FFFFFF'
          })
          .then(dataUrl => {
            let link = document.createElement('a');
            link.download = `${this.imgName}.${type}`;
            link.href = dataUrl;
            link.click();
          });
        break;
      case 'svg':
        this.onSaveCallback = data =>
        domtoimage
          .toSvg(data)
          .then(dataUrl => {
            let link = document.createElement('a');
            link.download = `${this.imgName}.${type}`;
            link.href = dataUrl;
            link.click();
          });
        break;
      case 'jpg':
      default:
        this.onSaveCallback = data =>
        domtoimage
          .toJpeg(data, {
            bgcolor: '#FFFFFF'
          })
          .then(dataUrl => {
            let link = document.createElement('a');
            link.download = `${this.imgName}.jpg`;
            link.href = dataUrl;
            link.click();
          });
        break;
    }
  }

  onSaveAsClick() {
    const data = document.getElementById('texEquation');
    this.onSaveCallback(data);
  }
}
