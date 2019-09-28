import { Component, OnInit, Input } from '@angular/core';
import { Peaje } from '../../interfaces/interfaces';

@Component({
  selector: 'app-my-peajes',
  templateUrl: './my_peajes.component.html',
  styleUrls: ['./my_peajes.component.scss'],
})
export class MyPeajesComponent implements OnInit {

  hoy: Date;
  @Input() peajes: Peaje[] = [];

  constructor() { }

  ngOnInit() {

    this.hoy = new Date();

    console.log(this.peajes);
  }

}
