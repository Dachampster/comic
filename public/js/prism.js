let prism = document.querySelector(".rec-prism");
$('body').css('background', 'linear-gradient(#a65cda, #56227b)');

function showMusic(){
  $('body').css('background', 'linear-gradient(#ff9d26, #965a00)');
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}

function showComic(){
  $('body').css('background', 'linear-gradient(#a65cda, #56227b)');
  prism.style.transform = "translateZ(-100px)";
  
}

function showMerch(){
  $('body').css('background', 'linear-gradient(#03a9f4, #42509e)');
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showOrderForm(){
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactMe(){
  $('body').css('background', 'linear-gradient(#f538ff, #78007e)');
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
  
}

function showThankYou(){
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}