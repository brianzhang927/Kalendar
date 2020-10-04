$(document).ready(function (){
  var images = [
    "months/jan.png",
    "months/feb.png",
    "months/march.png",
    "months/april.png",
    "months/may.png",
    "months/june.png",
    "months/july.png",
    "months/aug.png",
    "months/sept.png",
    "months/oct.png",
    "months/nov.png",
    "months/dec.png",
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
