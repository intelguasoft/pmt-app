import { Component, OnInit, Input } from '@angular/core';
import { Peaje } from '../../interfaces/interfaces';

@Component({
  selector: 'app-peaje',
  templateUrl: './peaje.component.html',
  styleUrls: ['./peaje.component.scss'],
})
export class PeajeComponent implements OnInit {

  @Input() peaje: Peaje = {};

  constructor() { }

  ngOnInit() {}

}
