import { Injectable } from '@angular/core';

import { Song } from './shared/models/song.model';
import { Chord } from './shared/models/chord.model';

@Injectable({
  providedIn: "root"
})
export class AppState {

  private _songModels: Song[];
  private _activeSong: Song;
  private _chordModels: Chord[];
  
  constructor() {
    this._activeSong = Object();
    this._songModels = Array();
    this._chordModels = Array();
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
  get chordModels(): Chord[] {
    return this._chordModels;
  }
  set chordModels(chords: Chord[]) {
    this._chordModels = chords;
  }
}
