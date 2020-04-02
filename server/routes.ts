import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import SongCtrl from './controllers/song';
import ChordCtrl from './controllers/chord';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const songCtrl = new SongCtrl();
  const chordCtrl = new ChordCtrl();

  // Songs
  router.route('/songs').get(songCtrl.getAll);
  router.route('/songs/count').get(songCtrl.count);
  router.route('/song').post(songCtrl.insert);
  router.route('/song/:id').get(songCtrl.get);
  router.route('/song/:id').put(songCtrl.update);
  router.route('/song/:id').delete(songCtrl.delete);

  // Chords
  router.route('/chords/:id').get(chordCtrl.getAll);
  router.route('/chords/count/:id').get(chordCtrl.count);
  router.route('/chord').post(chordCtrl.insert);
  router.route('/chord/:id').get(chordCtrl.get);
  router.route('/chord/:id').put(chordCtrl.update);
  router.route('/chord/:id').delete(chordCtrl.delete);
  

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
