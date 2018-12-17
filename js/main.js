/*function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}*/

function get_Img_ID(clicked_id){
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById(clicked_id);

console.log(clicked_id);
var modalImg = document.getElementById("img01");


//var modalImg = clicked_id_blank;
//console.log(JSON.stringify(modalImg));




var captionText = document.getElementById("caption");
    
    CreatePopup(img, modal, modalImg, captionText);
    
    

}

function CreatePopup(img, modal, modalImg, captionText){
/*img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}*/
    
    
modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}    
}


function openModal() {
  document.getElementById('myModal2').style.display = "block";
}


// Close the Modal
function closeModal() {
  document.getElementById('myModal2').style.display = "none";
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
    
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}













function openCaroler() {
  document.getElementById('CarolerModal').style.display = "block";
}

function closeCaroler() {
  document.getElementById('CarolerModal').style.display = "none";
}




showCarolerSlides(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showCarolerSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    console.log("currentSlide2", n);
  showCarolerSlides(slideIndex = n);
    
}









function showCarolerSlides(n) {
  
    console.log("showcarolerslides");
    var i;
  var slides = document.getElementsByClassName("mySlides2");

  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
