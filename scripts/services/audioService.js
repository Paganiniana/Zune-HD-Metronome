app.service("SAudio", [ //Audio was taken, used S(ound)Audio
  function() {
    audio = {}; //instantiate the object
    audio.soundOptions = {
      "Standard": {
        name: "Standard",
        location: './static/sounds/soundbite.wav',
        description: "The standard sound."
      },
      "Woodblock": {
        name: "Woodblock",
        location: "./static/sounds/soundbite.wav",
        description: "A more natural sound.",
      }
    }
    audio.getFavoriteSound = function() {
      return this.soundOptions[localStorage.getItem('soundbite')];
    }
    audio.setFavoriteSound = function(name) {
      localStorage.setItem('soundbite', name)
    }

    //if no favorite audio exists, set one.
    if (!localStorage.getItem('soundbite')) {
      audio.setFavoriteSound('Standard');
    }
    else {
    }

    return audio;
  }]);
