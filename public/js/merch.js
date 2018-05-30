
$('#form').on('submit', function(event){
  event.preventDefault();
  console.log($('[name="album"]').val());
  $('[name="print"]').val();
  $('[name="stickers"]').val();
  $.ajax({
    method: "POST",
    url: `/merch/${email}`
}).then(function (data) {
    console.log(data)
    
});
})