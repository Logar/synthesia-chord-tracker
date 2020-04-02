import { Injectable } from '@angular/core';

import { Song } from './shared/models/song.model';

@Injectable({
  providedIn: "root"
})
export class AppState {

  private _songModels: Song[];
  private _activeSong: Song;
  
  constructor() {
    this._activeSong = Object();
    this._songModels = Array();
  }

  get activeSong(): Song {
    return this._activeSong;
  }
  set activeSong(song: Song) {
    this._activeSong = song;
  }
  get songModels(): Song[] {
    return this._songModels;
  }
  set songModels(songs: Song[]) {
    this._songModels = songs;
  }
}
