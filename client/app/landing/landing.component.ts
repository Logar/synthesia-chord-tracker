import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { SongService } from '../services/song.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [SongService]
})
export class LandingComponent implements OnInit {

  constructor(private _songService: SongService) { }
  @ViewChild('video') video: ElementRef
  
  songData = { chords: [] }
  toggleMapMode = true;

  ngOnInit() {
    this._songService.getJSON().subscribe(
      res => Object.assign(this.songData, res),
      error => console.log(error)
    );
    console.log(this.songData)
  }

  onChangeSpeed(event) {
    this.video.nativeElement.playbackRate = event.target.value;
  }

  onVideoTimeUpdate() {
    let currentTime = this.video.nativeElement.currentTime
    this.songData.chords.filter(currentTime)
  }
}
