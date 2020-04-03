export class Song {
  // tslint:disable-next-line: variable-name
  public constructor(
    public _id: number,
    public title: string,
    public key: string,
    public videoSrc: string,
    public chords?: Array<Object>
  ) {
    this._id = _id;
    this.title = title;
    this.key = key;
    this.videoSrc = videoSrc;
    this.chords = new Array();
  }
}
