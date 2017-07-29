import Rx from 'rx-lite';

class Events {
  constructor() {
    this.keyStream = Rx.Observable.fromEvent(document.body, 'keyup');
  }
}

const events = new Events();
export default events;
