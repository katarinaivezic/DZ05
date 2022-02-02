import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../modules/Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() room: Room;

  constructor() {
    this.room = new Room("123", "Naziv", 4, 5)
  }

  ngOnInit() {
  }
}