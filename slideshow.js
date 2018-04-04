window.addEventListener('load', function(){
  var slideIndex = 1;
  showSlides(slideIndex);

  document.getElementById("next").addEventListener('click', function(){
    showSlides(slideIndex += 1);
  });

  document.getElementById("prev").addEventListener('click', function(){
    showSlides(slideIndex -= 1);
  });

  function getDot(event){
    var elementId = event.target.id;
    var elementNumber = elementId.match(/\d/g).join("");
    elementNumber = parseInt(elementNumber);
    showSlides(slideIndex = elementNumber);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', getDot);
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

});
