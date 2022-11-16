import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  Titulo = 'Aplicación de Calculadora';

  Num1:number = 0;
  Num2:number = 0

  operando1:number= 0;
  operando2:number=0;

  sum:number = 0;

  suma:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  Sumar():void{
    this.sum =  this.Num1 + this.Num2;
  }


  Sumax():void{
    this.suma =  this.operando1 + this.operando2;
  }


}
