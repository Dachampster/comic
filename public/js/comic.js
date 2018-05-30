$(document).ready(function () {
    
updatePage(0,'latest');
getChapters();

});

function updatePage(current,direction){
    $.ajax({
        method: "GET",
        url: `/comic/${current}/${direction}`
    }).then(function (data) {
        let newPage = data;
        buildPage(newPage);
        
    });
}
function buildPage(newPage){
    $('#comic').empty();
        let page = $('<img>');
        $(page).attr('id','page');
        $(page).attr('src', `../comic/${newPage.chapter}/${newPage.src}`);
        $(page).data('index', newPage.index);
        $(page).css('width', '100%');
        $(page).css('border','3px');
        $(page).css('border','solid 3px #56227b');
        $('#comic').append(page)
}
function getChapters(){
    $.ajax({
        method: "GET",
        url: `/comic/chapters`
    }).then(function (data) {
        let chapters = parseInt(data);
        console.log(chapters);
        for(let i = 0;i<chapters;i++){
            let num = i + 1;
            buildChapters(num);
        }
    });
}
function buildChapters(num,chapters){
    let option = $('<option>');
    $(option).val(num);
    $(option).addClass('chapter');
    $(option).text(`Chapter ${num}`);
    if(num = 11){
        $(option).attr('selected','selected');
    }
    $("#chapters").append(option);
}

//event listeners
$('#chapters').on('change', function(event){
    event.preventDefault();
    let num = $( "select option:selected" ).val();
    $.ajax({
        method: "GET",
        url: `/comic/${num}`
    }).then(function (data) {
        let newPage = data;
        //its hacky but works
        updatePage(newPage.index + 1, 'backwards');
        
    });
})

$('.butt').on('click',function(event) {
    event.preventDefault();
    let current = $('#page').data('index');
    let direction = ($(this).data('dir'));
    updatePage(current,direction);
    
  })