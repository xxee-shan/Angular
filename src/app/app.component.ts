import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display = true;
  clicks = [];

  addClick(){
    this.display = !this.display;
    this.clicks.push(+ new Date());
  }

  isWhite(item){
    return this.clicks.indexOf(item) >= 4;
  }

  getColor(item){
    return this.clicks.indexOf(item) >= 4 ? "blue" : "white";
  }
}
