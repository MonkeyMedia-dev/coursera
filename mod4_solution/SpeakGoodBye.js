(function (window) {
  var speakWord = "Good Bye";

  var byeSpeaker = {
    goodFunc: function speak(name) {
      console.log(speakWord + " " + name);
    }
  };

  window.byeSpeaker = byeSpeaker;
})(window);