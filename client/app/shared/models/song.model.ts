export class Song {
  // tslint:disable-next-line: variable-name
  public constructor(
    public id: number,
    public title: string,
    public key: string,
    public chords: Array<object>
  ) {
    this.id = id;
    this.title = title;
    this.key = key;
    this.chords = new Array();
  }
}
