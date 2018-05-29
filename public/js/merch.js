let prism = document.querySelector(".rec-prism");
let page = "/comic/10/Page7.JPG";
$("#comic").append(`<img width = '100%'class = "comic" src = ${page}>`);

$(document).ready(function() {
    
  $('#nav').on('click', '.nav', function(event) {
    event.preventDefault();
    console.log('click');
    // var direction = $(this).children(".burger_id").val();
    let direction = $(this).data('dir');
    $.ajax({
      method: "GET",
      url: "/jump/" + direction
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});

function showMusic(){

  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}

function showComic(){
  prism.style.transform = "translateZ(-100px)";
  
}

function showMerch(){
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showOrderForm(){
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactMe(){
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
  
}

function showThankYou(){
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}