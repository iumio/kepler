/**
 * Created by rafina on 19/12/15.
 */

$(document).ready(function () {

    $('.tableaux').DataTable();

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

    $(".btn-add-table").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#modal_add_table").modal('show');
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

    $(".btn-delete-the-table").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#modal_delete_table").modal('show');
        });
    });

    $(".btn-rename-table").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $("#modal_rename_table").modal('show');
        });
    });

    $(".btn-delete-table").click(function (e) {
        var table_name = $(this).attr("name");
        e.preventDefault();
        $("#modal_delete_table").modal('show');
        $(".text-info").html(table_name);
        $("input[name='table_name_delete']").val(table_name);
    });

    $(".btn-delete-db-in-list").click(function (e) {
        var db_name = $(this).attr("name");
        e.preventDefault();
        $("#modal_drop_db").modal('show');
        $(".text-info").html(db_name);
        $("input[name='db_name_delete']").val(db_name);
    });

    $("#new_table_name").focus(function (e) {
        $(".btn-add-field-in-tab").show();
        $("#tab_add_field").show();
    });

    $("select[name='select_default']").change(function () {
        var value = $(this).val();
        if(value == "def")
        {
            $("input[name='default']").show();
        }
    });

    $(".btn-add-field-in-tab").click(function (e) {
        e.preventDefault();
        $("#tab_add_field").prepend("<tr><td><input type='text' class='form-control' name='field_name'/> </td> <td> <input type='text' class='form-control' name='field_type' placeholder='INT, VARCHAR, FLOAT...'/> </td> <td> <input type='text' class='form-control' name='field_size'/> </td> <td> <select name='select_default'> <option selected>Aucune</option> <option value='def'>Tel que défini : </option> <option value='NULL'>NULL</option> <option value='CURRENT_TIMESTAMP'>CURRENT_TIMESTAMP</option> </select> <input type='text' class='form-control input-sm noShow marginTop20' name='default'/> </td> <td> <div class='checkbox'> <label> <input type='checkbox'> </label> </div> </td> <td> <select name='select_default'> <option selected>---</option> <option value='PRIMARY'>PRIMARY</option> <option value='UNIQUE'>UNIQUE</option> <option value='INDEX'>INDEX</option> <option value='FULLTEXT'>FULLTEXT</option> </select> </td> <td> <div class='checkbox'> <label> <input type='checkbox'> </label> </div> </td> </tr>");
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".btn-del-data").click(function(e) {
        var id_field = $(this).attr("name");
        var col_name = $(this).parent().siblings(":first").attr('name');
        e.preventDefault();
        $("#modal_delete_data").modal('show');
        $(".text-info").html(id_field);
        $("input[name='col_name']").val(col_name);
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
                if (result != 1)
                {
                    $("#modal_add_db").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>"+result+"</p>");
                    $("#modal_add_db").css("background-color","rgba(246,184,173,0.7)");
                    $("#modal_add_db").modal("show");
                }
                else
                {
                    $("#modal_add_db").find(".modal-body").html("<p>Votre nouvelle base à été ajoutée</p>");
                    $("#modal_add_db").css("background-color","rgba(148,251,146,0.7)");
                    $("#modal_add_db").find(".modal-footer").hide();
                    $("#modal_add_db").modal("show");
                    window.setTimeout(function() {
                        window.location.href = 'index.php?run=showDB&value='+name_db;
                    }, 2000);
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
                url: 'index.php?run=renameDB&nameDB='+name_db+'&newDBName='+n_name_db,
                //data: {'nameDB':name_db,'newDBName': n_name_db },
                method: "POST"
            });
            rq.success(function (result) {
                $("#modal_info").modal("hide");
                if (result != 1) {
                    $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                    $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                    $("#modal_info").modal("show");
                }
                else {
                    $("#modal_info").find(".modal-body").html("<p>Le nom de la base à été changé</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    window.setTimeout(function () {
                        window.location.href = 'index.php?run=showDB&value=' + n_name_db;
                    }, 2000);
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
                url: 'index.php?run=deleteDB&nameDB='+name_db,
                //data: {'nameDB':name_db },
                method: "POST"
            });
            rq.success(function (result) {
                $("#modal_info").modal("hide");
                if (result != 1) {
                    $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                    $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                    $("#modal_info").modal("show");
                }
                else {
                    $("#modal_info").find(".modal-body").html("<p>La base de donnée à été supprimée</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    window.setTimeout(function () {
                        window.location.href = 'index.php?run=indexAction';
                    }, 2000);
                }
            })
        })
    });

    $(".form_delete_table").each(function () {
        $(this).submit(function (e) {
            e.preventDefault();
            $("#modal_delete_table").modal('hide');
            var name_db = $("input[name='name_db']").val();
            var name_table = $(".text-info").html();
            var rq = $.ajax({
                url: 'index.php?run=delete_table&name_db='+name_db+'&name_table='+name_table,
                //data: {'nameDB':name_db },
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
                    $("#modal_info").find(".modal-body").html("<p>La table à été supprimée</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    window.setTimeout(function () {
                        window.location.href = 'index.php?run=showDB&value=' +name_db;
                    }, 2000);
                }
            })
        })
    });
    $(".form_rename_table").each(function () {
        $(this).submit(function (e) {
            e.preventDefault();
            $("#modal_rename_table").modal('hide');
            var new_name_table = $("input[name='new_table_name']").val();
            var name_db = $("input[name='name_db']").val();
            var table_name = $("input[name='tale_name']").val();
            var rq = $.ajax({
                url: 'index.php?run=rename_table&name_db='+name_db+'&table_name='+table_name+'&new_name_table='+new_name_table,
                //data: {'nameDB':name_db },
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
                    $("#modal_info").find(".modal-body").html("<p>Le nom de la table à été changé</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    window.setTimeout(function () {
                        window.location.href = 'index.php?run=showDB&value='+name_db;
                    }, 2000);
                }
            })
        })
    });
    $(".form_delete_data").each(function () {
        $(this).submit(function (e) {
            e.preventDefault();
            $("#modal_delete_data").modal('hide');
            var name_db = $("input[name='name_db']").val();
            var table_name = $("input[name='tale_name']").val();
            var col_name = $("input[name='col_name']").val();
            var id_field = $(".text-info").html();
            var rq = $.ajax({
                url: 'index.php?run=delete_data&name_db='+name_db+'&table_name='+table_name+'&id_col_name='+col_name+'&id_field='+id_field,
                //data: {'nameDB':name_db },
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
                    $("#modal_info").find(".modal-body").html("<p>La donnée à bien été supprimée</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    window.setTimeout(function () {
                        window.location.href = 'index.php?run=content_table&dbname='+name_db+'&t_name='+table_name;
                    }, 2000);
                }
            })
        })
    });
    $(".data").each(function () {
        $(this).change(function (e) {
            e.preventDefault();
            var new_value = $("input[name='newValue']").val();
            var name_db = $("input[name='name_db']").val();
            var table_name = $("input[name='tale_name']").val();
            var col_name_id = $(".btn-del-data").parent().siblings(":first").attr('name');
            var id_value = $('td:first', $(this).parents('tr')).text();
            id_value = id_value.replace(/[\s+][\s]/g, "");
            id_value = id_value.replace(/[" "]/g, "");
            var col_name_edit = $(this).attr('name');
            console.log(new_value);
            console.log(name_db);
            console.log(table_name);
            console.log(col_name_id);
            console.log(col_name_edit);
            console.log(id_value);
            var rq = $.ajax({
                url: 'index.php?run=edit_data&name_db='+name_db+'&table_name='+table_name+'&id_col_name='+col_name_id+'&col_name_edit='+col_name_edit+'&id_value='+id_value+'&value='+new_value,
                //data: {'nameDB':name_db },
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
                   $("#modal_info").find(".modal-body").html("<p>La donnée à bien été Modifiée</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    window.setTimeout(function () {
                        window.location.href = 'index.php?run=content_table&dbname='+name_db+'&t_name='+table_name;
                    }, 2000);
                }
            })
        })
    });
});
