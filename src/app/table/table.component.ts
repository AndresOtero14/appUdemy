import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

 names: string [];


  constructor() {

    this.names=["andres", " maria", "jose"]
   }

  ngOnInit(): void {
  }



}
