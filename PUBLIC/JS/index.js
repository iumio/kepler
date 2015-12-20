/**
 * Created by rafina on 19/12/15.
 */

$(document).ready(function () {

    $("a[href='#makeQuery']").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#home").hide();
            $("#showDB").hide();
            $("#makeQuery").show();
            $("#showInfo").hide();
            $("#showStruct").hide();
        });
    });

    $("a[href='#showDB']").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#showDB").show();
            $("#makeQuery").hide();
            $("#home").hide();
        });
    });

    $("a[href='#showInfo']").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#showInfo").show();
            $("#makeQuery").hide();
            $("#home").hide();
        });
    });
    $("a[href='#showStruct']").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#showStruct").show();
            $("#makeQuery").hide();
            $("#home").hide();
        });
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});
