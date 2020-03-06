// Default DevCorner JavaScript Setting
// Get the modal
var modal = document.getElementById('_myModal');

// Get the button that opens the modal
var btn = document.getElementById("_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("_close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Script for the filter gallery
const buttons = document.querySelector("#buttons").children;
const items = document.querySelector(".items").children;

for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click",function(){

    for(let j=0; j<buttons.length; j++){
      buttons[j].classList.remove("active")
    }
    this.classList.add("active")
    const target=this.getAttribute("data-target");

    for(let k=0; k<items.length; k++){
      items[k].style.opacity="0.5";
      items[k].style.transform="scale(0.8)";

      // items[k].style.display="none";

      if(items[k].getAttribute("data-id")==target){
        items[k].style.opacity="1";
        items[k].style.transform="scale(1)";

        // items[k].style.display="block";
      }
      if(target=="all"){
        items[k].style.opacity="1";
        items[k].style.transform="scale(1)";

        // items[k].style.display="block";
      }
    }
  })
}




// END
