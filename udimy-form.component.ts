import { Component } from '@angular/core';

@Component({
  selector: 'udimy-form',
  templateUrl: './udimy-form.component.html',
  styleUrls: ['./udimy-form.component.css']
})
export class UdimyFormComponent  {

  categorys = [
    {id : 1 , name:"Dveloper"},
    {id : 2 , name:"Art"},
    {id : 3 , name:"Language"},

  ];

  m(m){
    console.log(m);
  }
}
