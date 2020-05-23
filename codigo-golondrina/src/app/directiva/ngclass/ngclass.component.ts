
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  DatosPermitidos = [1, 2, 3]

  cicloDatos = [
    { id: 1, name: 'info1' },
    { id: 2, name: 'info2' },
    { id: 5, name: 'info5' }]

  constructor() { }

  ngOnInit() {
  }

}

