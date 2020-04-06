import { 
  Component, 
  Input
} from '@angular/core';

import { AbstractObserver } from '../shared/abstract/observer.abstract';

import { Chord } from '../shared/models/chord.model';
import { Song } from '../shared/models/song.model';

import { SongService } from '../services/song.service';
import { ChordService } from '../services/chord.service';
import { AppState } from '../app.state';

@Component({
  selector: 'chord-form',
  templateUrl: './chord-form.component.html',
  styleUrls: ['./chord-form.component.scss'],
  providers: [SongService, ChordService]
})
export class ChordFormComponent extends AbstractObserver {

  // Declare model types
  chordModel: Chord;
  activeSong: Song;

  @Input() videoTime: number;
  submitted: boolean;

  public constructor(
    protected _songService: SongService,
    protected _chordService: ChordService,
    public appState: AppState
  ) {
    // Invoke parent class constructor
    super();

    this.chordModel = new Chord(
      null,
      this.appState.activeSong._id, 
      this.videoTime, 
      null, 
      null);
    this.submitted = false;
  }

  public onSubmitAddChord(): void {
    this.submitted = true;
    this.chordModel = Object.assign(this.chordModel, {timestamp: this.videoTime});
    console.log("Before Submit", this.chordModel);
    this._chordService.addChord(this.chordModel).subscribe(
      super.observable(this.addChordCallback)
    );
  }

  public addChordCallback() {
    console.log("After Submit", this.chordModel);
  }
}
