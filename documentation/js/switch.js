(function(){
  if (day === "Tuesday") {
    eat_breakfast();
  } else if (day === "Wednesday") {
    go_to_the_park();
  } else if (day === "Saturday") {
    if (day === bingo_day) {
      go_to_bingo();
    };
  } else if (day === "Sunday") {
    go_to_church();
  } else {
    go_to_work();
  }
})();