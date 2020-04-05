export class Chord {
  // tslint:disable-next-line: variable-name
  public constructor(
    public _id: number,
    public songID: number,
    public timestamp: number,
    public root: string,
    public quality: string,
    public bass?: string,
    public numeral?: string,
    public alias?: string,
    public diatonic?: boolean
  ) {
    this._id = _id;
    this.songID = songID;
    this.timestamp = timestamp;
    this.root = root;
    this.quality = quality;
    this.bass = bass || "";
    this.numeral = numeral || "";
    this.alias = alias || "";
    this.diatonic = diatonic || true;
  }
}