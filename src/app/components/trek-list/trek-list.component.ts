import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-trek-list',
  templateUrl: './trek-list.component.html',
  styleUrls: ['./trek-list.component.css']
})

export class TrekListComponent implements OnInit {
  public trekList = [];
  constructor(private _dataService : DataService) { }

  ngOnInit() {
    this._dataService.setCurrentScreen('trekList');
  	this._dataService.getTrekList()
  		.subscribe(data => this.trekList = data);
  }

}
