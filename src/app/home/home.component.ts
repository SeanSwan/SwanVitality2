import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  
  
  
  constructor() { }

  ngOnInit() {
   
  }
  
}
