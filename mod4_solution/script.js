(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (first in names) {
    if (names[first].charAt(0) == 'j' || names[first].charAt(0) == 'J') {
      byeSpeaker.goodFunc(names[first])
    } else {
      helloSpeaker.helloFunc(names[first])
    }
  }
})();