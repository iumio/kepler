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

    $(".btn-rename").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#modal_rename_db").modal('show');
        });
    });

    $(".btn-delete-db").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#modal_drop_db").modal('show');
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
            var name_db = $("input[name='dbName']").val();
            var rq = $.ajax({
                url: 'index.php?run=addDB&nameDB='+name_db,
                method: "POST"
            });
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
                        window.location.href = 'index.php?run=showDB&value='+name_db;
                    }, 3000);
                }
            })
        })
    });

    $(".form_rename_db").each(function () {
        $(this).submit(function (e) {
            e.preventDefault();
            $("#modal_rename_db").modal('hide');
            var name_db = $("input[name='db_name']").val();
            var n_name_db = $("input[name='new_db_name']").val();
            var rq = $.ajax({
                url: 'index.php?run=renameDB',
                data: {'nameDB':name_db,'newDBName': n_name_db },
                method: "POST"
            });
            rq.success(function (result) {
                console.log(result);
                $("#modal_info").modal("hide");
                if (result != 1) {
                    $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                    $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                    $("#modal_info").modal("show");
                }
                else {
                    $("#modal_info").find(".modal-body").html("<p>Le nom de la base a été changé</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    window.setTimeout(function () {
                        window.location.href = 'index.php?run=showDB&value=' + n_name_db;
                    }, 3000);
                }
            })
        })
    });

    $(".form_delete_db").each(function () {
        $(this).submit(function (e) {
            e.preventDefault();
            $("#modal_drop_db").modal('hide');
            var name_db = $("input[name='db_name_delete']").val();
            var rq = $.ajax({
                url: 'index.php?run=deleteDB',
                data: {'nameDB':name_db },
                method: "POST"
            });
            rq.success(function (result) {
                console.log(result);
                $("#modal_info").modal("hide");
                if (result != 1) {
                    $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                    $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                    $("#modal_info").modal("show");
                }
                else {
                    $("#modal_info").find(".modal-body").html("<p>La base de donnée a été supprimée</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    window.setTimeout(function () {
                        window.location.href = 'index.php';
                    }, 3000);
                }
            })
        })
    });
});
