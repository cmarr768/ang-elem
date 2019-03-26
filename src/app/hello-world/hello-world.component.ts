import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  
@Input() public personId: string;
@Input() public personFirstName: string;
@Input() public personLastName: string;
//this wont work as prop
@Input() public person:Person;
  constructor() { }


  ngOnInit() {
  }

}
