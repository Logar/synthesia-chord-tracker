import Chord from '../models/chord';
import BaseCtrl from './base';

export default class ChordCtrl extends BaseCtrl {
  model = Chord;

  // Get all
  getAll = async (req, res) => {
    try {
      const docs = await this.model.find({songID: req.params.id});
      res.status(200).json(docs);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
