$(document).ready(function () {
    
changePage(0,'latest');
getChapters();

});

function changePage(current,direction){
    $.ajax({
        method: "GET",
        url: `/comic/${current}/${direction}`
    }).then(function (data) {
        let newPage = data;
        updatePage(newPage);
    });
}
function updatePage(newPage){
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
        for(let i = 0;i<chapters;i++){
            let num = i + 1;
            buildChapters(num,chapters);
        }
    });
}
function buildChapters(num,chapters){
    let option = $('<option>');
    $(option).val(num);
    $(option).addClass('chapter');
    $(option).text(`Chapter ${num}`);
    $("#chapters").append(option);
    if(num = chapters){
        $(option).attr('selected','selected');
    }

}

$('#chapters').on('change', function(event){
    event.preventDefault();
    let num = parseInt($( "select option:selected" ).val());
    $.ajax({
        method: "GET",
        url: `/comic/jump/${num}`
    }).then(function (data) {
        let newPage = data;
        updatePage(newPage);
        
    });
})

$('.butt').on('click',function(event) {
    event.preventDefault();
    let current = $('#page').data('index');
    let direction = ($(this).data('dir'));
    updatePage(current,direction);
    
  })