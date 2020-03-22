export class Chord {
  // tslint:disable-next-line: variable-name
  public constructor(
    public songID: number,
    public chord: 
      {
        timestamp: number,
        root?: string,
        bass?: string,
        quality?: string,
        numeral?: string,
        alias?: string,
        diatonic?: boolean,
      }
  ) {
    this.songID = songID;
    this.chord =
      {
        timestamp: chord.timestamp || 0.000,
        root: chord.root || "",
        bass: chord.bass || "",
        quality: chord.quality || "",
        numeral: chord.numeral || "",
        alias: chord.alias || "",
        diatonic: chord.diatonic || false
      };
  }
}