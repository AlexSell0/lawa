jQuery(document).ready(function($) {
    // в класе faq при нажатии на элемент с тегом <dt>
    $(".questions-faq dt").on('click', function() {
        // выезжает слайд с тегом <dd>
        $('.questions_faq dd').hide('100').not($(this).siblings()).prev().removeClass("faq_active");
        $(this).next('dd').slideToggle().prev().toggleClass("faq_active");
    })
});


// $(document).ready(function() {
//     var acc = document.getElementsByClassName("questions_dt");
//     var i;

//     for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("faq_active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight){
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         } 
//     });
//     }

// });