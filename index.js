
window.addEventListener("scroll", function() {
  var tags = document.querySelectorAll(".tag");

  for (var i = 0; i < tags.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = tags[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if(elementTop < windowHeight - elementVisible) {
      tags[i].classList.add("visible");
    } else {
      tags[i].classList.remove("visible");
    }
  }
});

