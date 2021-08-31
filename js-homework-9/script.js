// task1
$('a[href^="https://"]').attr('target','_blank');
// task2
$('h2.head').css('background-color', 'green').find('.inner').css('font-size', '35px');
// task3
let tag1 = document.body.children[6];

let tagDiv1 = document.body.children[7];
$(tag1).before(tagDiv1);

let tag2 = document.body.children[8];
tag2.classList.add('h3Second');
let tagDiv2 = document.body.children[9];
$('h3.h3Second').before(tagDiv2);
// task4
$('.inputs input:checkbox').click(() => { 
    let lengthEl = $('.inputs input:checkbox:checked').length;
    let checkboxCheked = $('.inputs input:checkbox:checked');
    if (lengthEl >= 3 ) {
        if (checkboxCheked !== true) {
            $('.inputs input:checkbox').not('.inputs input:checked').remove();
        }
            
    }  
});