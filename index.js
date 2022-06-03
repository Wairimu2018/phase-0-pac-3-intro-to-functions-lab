function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper (string) {
    console.log(string.toLowerCase( ));
  }
  function sayHiToHeadphonedRoommate (aWord) {
    var canthear = "I can't hear you!";
    var yes = "YES INDEED!";
    var loveto = "I would love to!";
    var dinner = "Let's have dinner together!";
    if (aWord.toLowerCase(aWord) === aWord) {
      return canthear;
    }
    else if (aWord.toUpperCase(aWord) === aWord) {
      return yes;
    }
    else if (dinner=== aWord) {
      return loveto
    }
  }
    