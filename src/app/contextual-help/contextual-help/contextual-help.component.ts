import { Component, OnInit, Inject } from '@angular/core';
import { HelpDataService } from './../help-data.service';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';

@Component({
  selector: 'app-contextual-help',
  templateUrl: './contextual-help.component.html',
  styleUrls: ['./contextual-help.component.css']
})

export class ContextualHelpComponent implements OnInit {

  public helpContent;
  constructor(private _dataService : HelpDataService, @Inject(MAT_BOTTOM_SHEET_DATA) private _bottomSheetData: any) { }

  ngOnInit() {
  	let screen = this._bottomSheetData.screen;
    this._dataService.getHelpContent()
      .subscribe(data => {
        for(let helpContent of data){
          if(helpContent["screen"] == screen){
            this.helpContent = helpContent.content;
            break;
          }
        }
      });
  }

}
