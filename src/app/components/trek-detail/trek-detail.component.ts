import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from './../../data.service';

@Component({
  selector: 'app-trek-detail',
  templateUrl: './trek-detail.component.html',
  styleUrls: ['./trek-detail.component.css']
})

export class TrekDetailComponent implements OnInit {

  public trekDetail;

  constructor(private _dataService: DataService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._dataService.setCurrentScreen('trekDetail');
  	let id = parseInt(this._route.snapshot.paramMap.get('id'));
  	this._dataService.getTrekList()
  		.subscribe(data => {
  			for(let trek of data){
  				if(trek["id"] == id){
  					this.trekDetail = trek;
  					break;
  				}
  			}
  		});
  }

}
