
$(window).on('load',function(){

    //home section slideshow

    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length


    function slideshow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideshow,5000)
    }

    slideshow()

})


$(document).ready(function(){

    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        if(!$(this).hasClass("active")){
        peopleFilter($(this).attr("data-target"))
        }
    })
    
    function peopleFilter(target){
        console.log(target)
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='"+target+"']").fadeIn();

    }
})