let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const email = document.forms["message-form"]["full-name"].value;
  const phonenumber = document.forms["message-form"]["phonenumber"].value;
  const messages = document.forms["message-form"]["message"].value;

  if (name == "" || email == "" || phonenumber == "" || messages == "" ) {
    alert("Tidak boleh ada yang kosong");
}

setSenderUI(name, gender, messages);
}