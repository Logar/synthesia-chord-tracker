import { Component, ViewChild, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';

import { SongService } from '../services/song.service';
import { Chord } from '../shared/models/chord.model';

@Component({
  selector: 'chord-form',
  templateUrl: './chord-form.component.html',
  styleUrls: ['./chord-form.component.scss'],
  providers: [SongService]
})
export class ChordFormComponent {

  // decorate the property with @Input()
  @Input() videoTime: number;
  @Input() songID: number;
  
  // Create a new chord model
  chordModel: Chord;
  submitted: boolean;

  public constructor(
    private _songService: SongService
  ) {
    this.chordModel = new Chord(this.songID, Object());
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    console.log("On Submit", this.chordModel);
  }

  public onToggleEditMode(): void {

  }
}
