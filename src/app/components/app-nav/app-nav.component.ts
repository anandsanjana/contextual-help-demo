import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ContextualHelpComponent } from './../../contextual-help/contextual-help/contextual-help.component';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})

export class AppNavComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, private _dataService: DataService) { }

  ngOnInit() { }

  showHelp(){
  	let screen = this._dataService.getCurrentScreen();
  	this._bottomSheet.open(ContextualHelpComponent, {
  		data: { screen: screen }
  	});
  }

}
