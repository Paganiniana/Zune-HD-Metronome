app.service('Metronome', [
  'Interval',
  function(Interval) {
    return function(bpm, fn) {
      let ms = 60000 / bpm;
      let interval = new Interval(ms, fn);
      return interval;

    }
  }
])
