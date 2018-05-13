import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // input and output boxes
  public textInput: String;
  public output: String;
  public demoVar: String = 'I need healing!'; // because everyone always seems to need healing
  public anyVar;
  public angValue = 4;

  constructor() {

  }

  // This array contains a bunch of info. Use *ngFor in the HTML to have the proper img, alt, title, cost,
  // and description display for each object in the array
  public personArr: Object[] = [
    {
      img: 'http://unsplash.it/256/256',
      alt: 'unsplash',
      title: 'Unsplash Photo',
      cost: 100,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto?'
    },
    {
      img: 'http://unsplash.it/256/256',
      alt: 'unsplashier',
      title: 'Unsplashier Photo',
      cost: 200,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto?'
    },
    {
      img: 'http://unsplash.it/256/256',
      alt: 'unsplashiest',
      title: 'Unsplashiest Photo',
      cost: 300,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto?'
    }
  ];

  public myMethod() {
    const lol: String = 'OHaiThere';
    console.log('Value of demoVar', this.demoVar);
    console.log('Value of lol', lol);
  }

  public update() {
    document.getElementById('result').innerHTML = (<HTMLInputElement>document.getElementById('inputid')).value;
    this.output = this.textInput;
  }
}
