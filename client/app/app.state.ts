import { Injectable } from '@angular/core';

import { Song } from './shared/models/song.model';
import { Chord } from './shared/models/chord.model';

@Injectable({
  providedIn: "root"
})
export class AppState {

  private _songModels: Song[];
  private _chordModels: Chord[];
  private _activeSong: Song;
  
  constructor() {
    this._songModels = Array();
    this._chordModels = Array();
    this._activeSong = Object();
  }

  get activeSong(): Song {
    console.log("Active Song Getter: ", this._activeSong);
    return this._activeSong;
  }
  set activeSong(song: Song) {
    console.log("Active Song Setter: ", song);
    this._activeSong = song;
  }
  get songModels(): Song[] {
    console.log("Song Models Getter: ", this._songModels);
    return this._songModels;
  }
  set songModels(songs: Song[]) {
    console.log("Song Models Setter: ", songs);
    this._songModels = songs;
  }
  get chordModels(): Chord[] {
    console.log("Chord Models Getter: ", this._chordModels);
    return this._chordModels;
  }
  set chordModels(chords: Chord[]) {
    console.log("Chord Models Setter: ", chords);
    this._chordModels = chords;
  }
}
