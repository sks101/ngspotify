import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from'../../../Artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	searchStr: string;
  	searchRes: Artist[];

  	constructor(private spotifyService:SpotifyService) { }

searchMusic(){
  	this.spotifyService.searchMusic(this.searchStr)
  		.subscribe(res=> {
  			this.searchRes = res.artists.items;
  		})
  }

  ngOnInit() {
  }

}
