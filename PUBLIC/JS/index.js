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

    $("#form_add_db").each(function(){
        $(this).submit(function(e)
        {
            e.preventDefault();
            var rq = $.ajax({
                url: 'index.php?run=addDB',
                method: "POST",
                data:{nameDB : $(this).find("input[name='dbName']").val()}
            }

            );
            rq.success(function(result)
            {
                console.log(result);
                if (result != 1)
                {
                    $("#modal_add_db").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>"+result+"</p>");
                    $("#modal_add_db").css("background-color","rgba(246,184,173,0.7)");
                    $("#modal_add_db").modal("show");
                }
                else
                {
                    $("#modal_add_db").find(".modal-body").html("<p>Votre nouvelle base a été ajoutée</p>");
                    $("#modal_add_db").css("background-color","rgba(148,251,146,0.7)");
                    $("#modal_add_db").find(".modal-footer").hide();
                    $("#modal_add_db").modal("show");
                    window.setTimeout(function() {
                        window.location.href = 'index.php?run=showDB&value='+$("input[name='dbName']").val();
                    }, 3000);
                }

            })
        })
    });
});
