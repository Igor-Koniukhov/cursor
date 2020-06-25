$(function () {
    $(".lang").on('click', function () {

        $(".lang").removeClass("active")
        $(this).addClass("active")
        $(".lang").parent(".lang-dropdown-wrapper").parent(".lang-dropdown").find(".remove").remove()

        $(".lang").parent(".lang-dropdown").children(".lang").remove()
        $(this).clone().appendTo(".lang-dropdown").removeClass("active")
    })

});



$(function () {
    $(".menu-icon").on('click', function () {

        $(this).next().children(".wrapper-dropdown").toggleClass("active")

    })
    $(".menu-icon").mouseleave(function () {

        $(this).next().children(".wrapper-dropdown").removeClass("active")
    })


})







function myFunction(experimentX){
    if (experimentX.matches){
        $(".wrapper,container").addClass("yoohooo")
    }
}
var experimentX = window.matchMedia("(max-width: 1200px)")
myFunction(experimentX) // Call listener function at run time
experimentX.addListener(myFunction)

function myFunction(x) {
    if (x.matches) { // If media query matches
        $(".menu-icon").addClass("active")
    } else {
        $(".menu-icon").removeClass("active")
    }
}
var x = window.matchMedia("(max-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes












