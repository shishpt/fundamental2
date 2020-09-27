// Get the Modal 
  var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
// When the user clicks the button it opens the modal


// When the user click on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}

// When the user clicks outside the Modal the Modal closes
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
//  }
//}

function purchase() {
  var x = document.getElementById("purchaseBook");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function fitTest() {
   var x = document.getElementById("fitTestform");
   var btn = document.getElementById("submit-button");
   if (x.style.display === "none") {
     x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  btn.onclick = function() {
    modal.style.display = "block";
  }
}

  function freeAnalysis() {
    var x = document.getElementById("freeAnalysisform");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function challenge() {
    var x = document.getElementById("2050Challenge");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
