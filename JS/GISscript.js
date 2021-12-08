// Owner : Jenish Shaleenkumar Shah //
// Date : Dec 7 2021 //
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp //

// This function hides the form if it is visible and shows the form if it is hidden, on a single click. //
function myFunction() {
    var x = document.getElementById("crrform");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
// https://www.w3schools.com/js/js_popup.asp //
//This function makes a popup alert appear when the button is pressed, giving the user two choices. //
function alertfunc() {
    var txt;
    if (confirm("Please Confirm!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("apply").innerHTML = txt;
  }
// End Ownership : Jenish Shaleenkumar Shah //