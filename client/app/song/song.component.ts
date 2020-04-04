import {
  Component,
  OnInit,
  ElementRef, 
  ViewChild
} from '@angular/core';
import { Observer } from 'rxjs';

import { SongService } from '../services/song.service';
import { ChordService } from '../services/chord.service';
import { AppState } from '../app.state';

import { Song } from '../shared/models/song.model';
import { Chord } from '../shared/models/chord.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  providers: [SongService, ChordService]
})
export class SongComponent implements OnInit {

  // Access video DOM
  @ViewChild('video') video: ElementRef;

  chordModel: Chord;
  videoTime: string;
  // Toggle for editing chord data
  toggleEditMode: boolean;

  public constructor(
    protected _songService: SongService,
    protected _chordService: ChordService,
    public appState: AppState
  ) {
    this.videoTime = "0.000";
    this.toggleEditMode = false;
  }

  public ngOnInit(): void {
    if (this.appState.songModels.length === 0) {
      // Invoke retrieval, transform, and setter of all songs stream
      this._songService.getAllSongs().subscribe(
        this._observable(this.setSongModels, this.setActiveSongModel)
      );
    }
  }

  public onChangeSong(event: any) {
    // event.target.value is the song id
    this.appState.activeSong = 
      this.findSongById(this.appState.songModels, event.target.value);
    event.stopPropagation();
  }

  public setSongModels(httpData: Array<Object>) {
    this.appState.songModels = this.assignSongModels(httpData);
  }

  public setActiveSongModel() {
    this.appState.activeSong = this.findSongById(
      this.appState.songModels,
      this.appState.songModels[0]._id
    );
  }

  public assignSongModels(httpData: Array<Object>) {
    return httpData.map((element: Object) => {
      return Object.assign(new Song(0, "", "", ""), element);
    });
  }

  public findSongById(songs: Song[], songID: number): Song {
    return songs.find(element => element._id === songID);
  }

  public onChangeSpeed(event: any): void {
    this.video.nativeElement.playbackRate = event.target.value;
  }

  public onChangeVideoTime(event: any): void {
    this.videoTime = (
      Math.max(
        (Math.round(event.srcElement.currentTime * 10) / 1000)
      )
    ).toString();
  }

  public _observable(...callbacks: Array<Function>): Observer<Object> {
    // Create observer object
    return {
      next: response => {
        callbacks.forEach(f => f.call(this, response))
      },
      error: error => console.error('HTTP Error: ', error),
      complete: () => console.log('Observer got a complete notification')
    };
  }
}
