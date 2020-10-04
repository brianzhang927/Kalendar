$(document).ready(function (){
  var images = [
    "images/months/jan.png",
    "images/months/feb.png",
    "images/months/march.png",
    "images/months/april.png",
    "images/months/may.png",
    "images/months/june.png",
    "images/months/july.png",
    "images/months/aug.png",
    "images/months/sept.png",
    "images/months/oct.png",
    "images/months/nov.png",
    "images/months/dec.png",
  ]
  var imageIndex = 0;

  $(".next").on("click", function() {
    imageIndex = (imageIndex + 1) % images.length;
    $("#jan").attr("src", images[imageIndex]);
  });

  $(".prev").on("click", function() {
    imageIndex = (imageIndex - 1) % images.length;
    $("#jan").attr("src", images[imageIndex]);
    if (imageIndex <= 0) {
      imageIndex = images.length;
    }
  });
})
