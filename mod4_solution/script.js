(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (first in names) {
    var firstLetter = names[first].charAt(0).toLowerCase();
    if (firstLetter == 'j') {
      byeSpeaker.goodFunc(names[first])
    } else {
      helloSpeaker.helloFunc(names[first])
    }
  }
})();