function load(data, callback) {
  console.log(data);
  callback("right");
}

load("Alok", function (sign) {
  if (sign === "right") {
    load("Aman", function (sign) {
      if (sign === "right") {
        load("Rajan", function (sign) {
          console.log("Done");
        });
      }
    });
  }
});
