$(document).ready(function () {
    $(".dropdown-div").click(function () {
        var menu = $(this).find(".dropdown-content");
        var arrow = $(this).find(".dropdown-arrow");
        if (arrow.attr("class").indexOf("clockwise rotated") == -1) {
            arrow.addClass("clockwise rotated");
            menu.slideDown("fast");
            menu.removeClass("hidden");
        } else {
            arrow.removeClass("clockwise rotated");
            menu.slideUp("fast");
            menu.addClass("hidden");
        }
    });
});