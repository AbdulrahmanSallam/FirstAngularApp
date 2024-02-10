import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
imagesSrc:string[] =["./assets/port1.png","./assets/port2.png","./assets/port3.png","./assets/port1.png","./assets/port2.png","./assets/port3.png"];

click:boolean=false;
imgSrc:string = "";

showBox(index:number){
this.imgSrc = this.imagesSrc[index];
this.click = true;
}

closeBox(e:any){
  if(!(e?.target instanceof HTMLImageElement))
  this.click = false;
}
}
