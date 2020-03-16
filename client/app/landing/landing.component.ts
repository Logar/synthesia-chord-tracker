import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { SongService } from '../services/song.service';
import { Song } from '../shared/models/song.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [SongService]
})
export class LandingComponent implements OnInit {

  constructor(private _songService: SongService) { }
  
  // Access video DOM
  @ViewChild('video') video: ElementRef;
  // Create a new song model
  songModel = new Song();

  // Toggle for editing chord data
  toggleEditMode: boolean = false;

  public ngOnInit(): void {
    // @fix change to a variable path 
    let path = '../../assets/json/songs/1_Yasashia.json';
    this._songService.getJSON(path).subscribe(
      res => Object.assign(this.songModel, res),
      error => console.log(error)
    );
    console.log("Got song: ", this.songModel);
  }
  
  public addTimeEntry(): void {
    console.log("Clicked add time entry");
  }

  public onChangeSpeed(event): void {
    this.video.nativeElement.playbackRate = event.target.value;
  }

  public onVideoTimeUpdate(): void {
    let currentTime = this.video.nativeElement.currentTime;
    console.log("Current Video Time", currentTime);
  }

}
