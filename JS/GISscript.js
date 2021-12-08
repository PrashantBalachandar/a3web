function myFunction() {
    var x = document.getElementById("crrform");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
function alertfunc() {
    var txt;
    if (confirm("Please Confirm!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("apply").innerHTML = txt;
  }