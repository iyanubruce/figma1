function myFunction() {
    var x = document.getElementById("mynavitems");
    if (x.className === "navitems") {
      x.className += " responsive";
    } else {
      x.className = "navitems";
    }
  }
