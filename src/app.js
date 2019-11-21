
$(document).ready(function () {

    const input = 'input[type=hidden]'
    var quizNo = $(input).val()

    $('#questions .row').not("#questions .row:first-child").hide()

    $(".page-item").click(function () {
      
        var index = $(".page-item").index(this)
        page(index)

        setAnswer(index);


    })

    function page(index) {

        hideQuestions()
        $('#questions .row').eq(index).show()
        $(input).val(index)
        $('.page-item').eq(index).addClass('active')
       
        $('.page-item a').eq(index).addClass('elevate-violet')

    
    }
    
    function hideQuestions() {

         $('#questions .row').hide()
         $('.page-item').removeClass('active')
         $('.page-item a').removeClass('elevate-violet')

    }

    $('input:radio').prop('checked', false)
 
    setAnswer(quizNo)

    function setAnswer(quizNo) {
        $(`#ans${quizNo} input:radio[name=${quizNo}]`).on('change', function() {

            $('span').eq($(input).val()).text($(this).val())
            
        });

        $('span').eq(quizNo).on('DOMSubtreeModified',function(){
            $('.page-item').eq(quizNo).addClass('visited text-white')
        })
    }

})