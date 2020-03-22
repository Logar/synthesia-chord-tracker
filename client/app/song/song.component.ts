import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { SongService } from '../services/song.service';
import { Song } from '../shared/models/song.model';
import { Chord } from '../shared/models/chord.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  providers: [SongService]
})
export class SongComponent implements OnInit {

  // Access video DOM
  @ViewChild('video') video: ElementRef;
  chordModel: Chord;
  songModel: Song;
  songID: number;
  videoTime: number;
  // Toggle for editing chord data
  toggleEditMode: boolean;

  public constructor(
    private _songService: SongService
  ) {
    this.songID = 1;
    this.songModel = new Song(this.songID, "Yasashia", "Bb Lydian", Array());
    this.chordModel = new Chord(1, Object());
    this.videoTime = 0.000;
    this.toggleEditMode = false;
    this.songData();
  }

  public ngOnInit(): void {}

  private songData(): void {
    // @fix change to a variable path 
    let path = '../../assets/json/songs/1_Yasashia.json';

    this._songService.getJSON(path).subscribe(
      response => { 
        console.log('HTTP response', response);
        Object.assign(this.chordModel, response);
      },
      error => console.log('HTTP Error', error),
      () => console.log('HTTP request completed.')
    );
  }

  public onChangeSpeed(event: any): void {
    this.video.nativeElement.playbackRate = event.target.value;
  }

  public onVideoTimeUpdate(): void {
    let currentTime = this.video.nativeElement.currentTime;
    this.videoTime = Math.max((Math.round(currentTime * 10) / 1000));
  }

  public onToggleEditMode(): void {
  }
}
