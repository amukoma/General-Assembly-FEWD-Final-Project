// Image Popup

function change(element) {
  element.classList.toggle("popup");
}

// Modal

// Get the modal

var modal = document.querySelector("#myModal");

// Get the button that opens the modal
var btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on the button, open the modal
btn.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

//  To prevent form submittion (can be switched off as there's a link to the form submission page)

// const body = document.querySelector('#submit-btn')

// body.addEventListener('click', function (event) {
// const input = document.querySelector('#submit-btn').value
// event.preventDefault()

// })
