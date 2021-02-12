(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (first in names) {
    var letter = names[first].charAt(0).toLowerCase();
    if (letter == 'j') {
      byeSpeaker.goodFunc(names[first])
    } else {
      helloSpeaker.helloFunc(names[first])
    }
  }
})();