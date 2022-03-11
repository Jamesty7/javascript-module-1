[
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];


  function stringClearner(messyStrings) {
      return messyStrings
      .filter((string) => typeof string === "string")
      .map((string) => string.toUpperCase() + "!")
      
  }