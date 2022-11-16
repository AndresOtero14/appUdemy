import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona2',
  templateUrl: './persona2.component.html',
  styleUrls: ['./persona2.component.css']
})
export class Persona2Component implements OnInit {


  nombre= "andres";
  Apellido = "otero";
  Edad = 22;



  constructor() { }

  ngOnInit(): void {
  }

}
