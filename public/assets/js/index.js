/**
 * Created by rafina on 19/12/15.
 */

let lastState = false;
$(document).ready(function () {

    var colorNav = localStorage.getItem("keplerDashboardColor");
    if (null != colorNav) {
        $("li[data-theme='" + colorNav + "']").click();
    }



    // CHECK IF SESSION STORAGE IS AVAILABLE IN THIS BROWSER
    if (window.sessionStorage) {
        $(".resizable").resizable({
            handles: {
                'n': '#handle'
            }
        });

        $(".custom-option:first-of-type").hover(function() {
            $(this).parents(".custom-options").addClass("option-hover");
        }, function() {
            $(this).parents(".custom-options").removeClass("option-hover");
        });
        $(".custom-select-trigger").on("click", function() {
            $('html').one('click',function() {
                $(".custom-select").removeClass("opened");
            });
            $(this).parents(".custom-select").toggleClass("opened");
            event.stopPropagation();
        });
        $(".custom-option").on("click", function() {
            var lang = $(this).attr("data-value");
            window.sessionStorage.setItem('lang', lang);
            $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
            $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
            $(this).addClass("selection");
            $(this).parents(".custom-select").removeClass("opened");
            $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
        });

        setTimeout(function () {
            window.location.href = 'index.php?run=logout&arg=noActivity';
        }, 1440000);

        $('.tableaux').DataTable();

        $(".listDB").click(function(e){
            e.preventDefault();
            $(this).parent().find(".listTable").toggle("slideDown");
        });

        $("a[href='#makeQuery']").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $("#makeQuery").show();
            });
        });

        $("#closeElementQuery").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $("#makeQuery").hide();
                $("#query_result").hide();
            });
        });


        $("#closeElementShowDb").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $("#showDB").hide();
            });
        });

        $("li[data-theme]").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                console.log($(this).attr("data-theme"));
                localStorage.setItem("keplerDashboardColor",  $(this).attr("data-theme"))
            });
        });

        $("a[href='#showDB']").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $("#showDB").show();
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

        $(".btn-edit-field").click(function (e) {
            e.preventDefault();
            var field_name = $(this).attr("name");
            var field_type = $(this).attr("field_type");
            field_type = field_type.toUpperCase();
            $("select[name='field_type']").val(field_type);
            $("#modal_edit_field" + field_name).modal('show');
            $(".text-info").html(field_name);
        });


        $(".btnexportDB").click(function (e) {
            e.preventDefault();
            let dbnameexport = $(this).attr("attr-export-dbname");
            let filenameexport = $(this).attr("attr-export-filename");

            let d = new Date();

            let month = d.getMonth()+1;
            let day = d.getDate();
            let h = d.getHours();

            let m = d.getMinutes();
            let s = d.getSeconds();

            let output = d.getFullYear() + '-' +
                (month<10 ? '0' : '') + month + '-' +
                (day<10 ? '0' : '') + day + '-' +
                (h<10 ? '0' : '') + h +  '-' +
                (m<10 ? '0' : '') + m +  '-' +
                (s<10 ? '0' : '') + s;

            $(".dbnameforexport").val(dbnameexport);
            $(".filedbname").val(filenameexport+output+".sql");
            $(".dbnamefordisplay").html(dbnameexport);
            $("#modal_export_db").modal('show');
        });



        $(".btn-add-field").click(function (e) {
            e.preventDefault();
            $("#modal_add_field").modal('show');
        });

        $(".btn-del-field").click(function (e) {
            e.preventDefault();
            var field_name = $(this).attr("name");
            $("#modal_delete_field").modal('show');
            $(".text-info-del-field").html(field_name);
            $("input[name='name_field']").val(field_name);
        });

        $(".btn-add-data").click(function(e){
            e.preventDefault();
            $("#modal_add_data").modal('show');
        });

        $(".btn-add-table").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $("#modal_add_table").modal('show');
            });
        });

        $(".btn-add-file").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $("#modal_add_file").modal('show');
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

        $(".btn-edit-field").click(function (e) {
            e.preventDefault();
            var field_name = $(this).attr("name");
            var field_type = $(this).attr("field_type");
            field_type = field_type.toUpperCase();
            $("select[name='field_type']").val(field_type);
            $("input[name='old_field_name']").val(field_name);
            $("#modal_edit_field"+field_name).modal('show');
        });

        $(".btn-delete-table").click(function (e) {
            var table_name = $(this).attr("name");
            e.preventDefault();
            $("#modal_delete_table").modal('show');
            $(".text-info_tbl").html(table_name);
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

        $(document).on('change','.sd',function(){
            var value = $(this).val();
            if(value == "def")
                $(this).parent().find("input[name^='default']").show();
            else
                $(this).parent().find("input[name^='default']").hide();
        });

        $("select[name=select_default_edit]").change(function () {
            var value = $(this).val();
            if (value == "def")
                $("input[name='select_default_edit']").css("display", "block");
            else
                $("input[name='select_default_edit']").css("display", "none");
        });

        $(".btn-add-field-in-tab").click(function (e) {
            e.preventDefault();
            $("#tab_add_field").append('<tr><td> <div class="form-group"> <div class="form-line"><input type="text" class="form-control " name="field_name[]" required="required" /> </div></div></td> <td> <select class="form-control show-tick" name="field_type[]" data-live-search="true"> <option value="INT" >INT</option> <option value="VARCHAR" >VARCHAR</option> <option value="TEXT" >TEXT</option> <option value="DATE">DATE</option> <optgroup label="Numérique"> <option value="TINYINT" >TINYINT</option> <option value="SMALLINT" >SMALLINT</option> <option value="MEDIUMINT" >MEDIUMINT</option> <option value="INT" >INT</option> <option value="BIGINT" >BIGINT</option> <option disabled="disabled">-</option> <option value="DECIMAL">DECIMAL</option> <option value="FLOAT" >FLOAT</option> <option value="DOUBLE" >DOUBLE</option> <option value="REAL" >REAL</option> <option disabled="disabled">-</option> <option value="BIT" >BIT</option> <option value="BOOLEAN" >BOOLEAN</option> <option value="SERIAL" >SERIAL</option> </optgroup> <optgroup label="Contient la date et l&opencurlyquote;heure"> <option value="DATE" >DATE</option> <option value="DATETIME" >DATETIME</option> <option value="TIMESTAMP" >TIMESTAMP</option> <option value="TIME" >TIME</option> <option value="YEAR" >YEAR</option> </optgroup> <optgroup label="Chaîne de caractères"> <option value="CHAR" >CHAR</option> <option value="VARCHAR" >VARCHAR</option> <option disabled="disabled">-</option> <option value="TINYTEXT" >TINYTEXT</option> <option value="TEXT" >TEXT</option> <option value="MEDIUMTEXT" >MEDIUMTEXT</option> <option value="LONGTEXT" >LONGTEXT</option> <option disabled="disabled">-</option> <option value="BINARY" >BINARY</option> <option value="VARBINARY" >VARBINARY</option> <option disabled="disabled">-</option> <option value="TINYBLOB" >TINYBLOB</option> <option value="MEDIUMBLOB" >MEDIUMBLOB</option> <option value="BLOB" >BLOB</option> <option value="LONGBLOB" >LONGBLOB</option> <option disabled="disabled">-</option> <option value="ENUM" t>ENUM</option> <option value="SET" >SET</option> </optgroup></select> </td> <td> <div class="form-group"><div class="form-line"> <input type="text" class="form-control field_size" name="field_size[]" data="NV" /></div></div> </td> <td> <select class="form-control sd" name="select_default[]"> <option selected>Aucune</option> <option value="def">Tel que défini : </option> <option value="NULL">NULL</option> <option value="CURRENT_TIMESTAMP">CURRENT_TIMESTAMP</option> </select> <div class="form-group"> <div class="form-line"><input type="text" class="form-control input-sm noShow marginTop20" name="default[]" value="NULL"/></div></div> </td> <td><select class="form-control" name="is_null[]"> <option value="no" selected="selected">Non</option> <option value="yes">Oui</option> </select> </td><td> <select class="form-control" name="select_index[]"> <option value="NULL" selected>---</option> <option value="PRIMARY">PRIMARY</option> <option value="UNIQUE">UNIQUE</option></select> </td> <td><select class="form-control" name="is_ai[]"> <option value="no" selected="selected">Non</option> <option value="yes">Oui</option> </select> </td> </tr>');
            $('select').selectpicker('refresh')
        });

        $(document).on('change','.field_size',function(){
            if ($(this).val() == '')
                $(this).attr("data","NV");
            else
                $(this).attr("data",$(this).val());
        });

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        $(".btn-del-data").click(function(e) {
            var id_field = $(this).attr("name");
            var col_name = $("input[name='col_name']").val();
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
                        }, 1000);
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
                        }, 1000);
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
                        }, 1000);
                    }
                })
            })
        });

        $(".form_delete_table").each(function () {
            $(this).submit(function (e) {
                e.preventDefault();
                $("#modal_delete_table").modal('hide');
                var name_db = $("input[name='name_db']").val();
                var name_table = $(".text-info_tbl").html();
                var rq = $.ajax({
                    url: 'index.php?run=delete_table&name_db='+name_db+'&name_table='+name_table,
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
                        $("#modal_info").find(".modal-body").html("<p>La table à été supprimée</p>");
                        $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                        $("#modal_info").find(".modal-footer").hide();
                        $("#modal_info").modal("show");
                        window.setTimeout(function () {
                            window.location.href = 'index.php?run=showDB&value=' +name_db;
                        }, 1000);
                    }
                })
            })
        });
        $("#form_rename_table").each(function () {
            $(this).submit(function (e) {
                e.preventDefault();
                $("#modal_rename_table").modal('hide');
                var new_name_table = $("input[id='new_table_name']").val();
                var name_db = $("input[name='name_db']").val();
                var table_name = $("input[name='table_name']").val();
                var rq = $.ajax({
                    url: 'index.php?run=rename_table&name_db='+name_db+'&table_name='+table_name+'&new_name_table='+new_name_table,
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
                        $("#modal_info").find(".modal-body").html("<p>Le nom de la table à été changé</p>");
                        $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                        $("#modal_info").find(".modal-footer").hide();
                        $("#modal_info").modal("show");
                        window.setTimeout(function () {
                            window.location.href = 'index.php?run=showDB&value='+name_db;
                        }, 1000);
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
                        }, 1000);
                    }
                })
            })
        });

        $(".form_add_data").each(function () {
            $(this).submit(function (e) {
                e.preventDefault();
                $("#modal_add_data").modal('hide');
                var name_db = $("input[name='name_db']").val();
                var table_name = $("input[name='tale_name']").val();
                var name_field = $(".label_field_add_data").map(function(){return $(this).html();}).get();
                var new_data = $("input[name^='new_data']").map(function(){return $(this).val();}).get();
                var rq = $.ajax({
                    url: 'index.php?run=add_data',
                    method: "POST",
                    data: {name_db:name_db, table_name:table_name, field_name:name_field, new_data:new_data }
                });
                rq.success(function (result) {
                    $("#modal_info").modal("hide");
                    if (result != 1) {
                        $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                        $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                        $("#modal_info").modal("show");
                    }
                    else {
                        $("#modal_info").find(".modal-body").html("<p>La donnée à bien été insérée</p>");
                        $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                        $("#modal_info").find(".modal-footer").hide();
                        $("#modal_info").modal("show");
                        window.setTimeout(function () {
                            window.location.href = 'index.php?run=content_table&dbname='+name_db+'&t_name='+table_name;
                        }, 1000);
                    }
                })
            })
        });

        $("#Query").each(function () {
            $(this).submit(function (e) {
                e.preventDefault();
                $("#modal_delete_data").modal('hide');
                var query_g = $("textarea[name='query']").val();
                var dbname = $(this).find("input[name='db']").val();
                console.log(dbname);
                var rq = $.ajax({
                    url: 'index.php?run=make_query',
                    data: {'query' : query_g, 'dbname' : dbname},
                    method: "POST",
                    dataType: 'json'
                });
                rq.success(function (result) {
                    if (result.code == -1) {
                        $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result.error + "</p>");
                        $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                        $("#modal_info").modal("show");
                    }
                    else
                    {
                        $("#query_result").find(".panel").find(".panel-body").html("")
                        if (result.length == 0) {
                            var html_content = "<span class='text-info'>Aucun résultat pour cette requête</span>";
                            $("#query_result").find(".panel").find(".panel-body").html(html_content);
                            $("#query_result").show();
                        }
                        else {
                            var html_content = "<table class='table table-striped table-bordered table-responsive tableaux'><thead><tr>";
                            $.each(result[0], function (key, value) {
                                html_content += "<th>" + key + "</th>";
                            });
                            html_content += "</thead><tbody>";
                            for (var i = 0; i < result.length; i++) {
                                html_content += "<tr>";
                                $.each(result[i], function (key, value) {
                                    html_content += "<td>" + value + "</td>";
                                });
                                html_content += "</tr>"
                            }
                            html_content += "</tbody></table>";
                            $("#query_result").find(".panel").find(".panel-body").html(html_content);
                            $("#query_result").show();
                            $('.tableaux').DataTable();
                        }
                        var aTag = $("div[id='query_result']");
                        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
                    }
                })
            })
        });

        $(".form_add_table").each(function () {
            $(this).submit(function (e) {
                e.preventDefault();
                $("#modal_add_table").modal('hide');
                var name_db = $("input[name='db_name']").val();
                var name_table = $("input[name='new_table_name']").val();
                var field_name = $('input[name^=field_name]').map(function(){return $(this).val();}).get();
                var field_type = $('select[name^=field_type]').map(function(){return $(this).val();}).get();
                var field_size = $('input[name^=field_size]').map(function(){return $(this).attr("data");}).get();
                var select_default = $('select[name^=select_default]').map(function(){return $(this).val();}).get();
                var is_null = $('select[name^=is_null]').map(function(){return $(this).val();}).get();
                var select_index = $('select[name^=select_index]').map(function(){return $(this).val();}).get();
                var is_ai = $('select[name^=is_ai]').map(function(){return $(this).val();}).get();
                var default_i = $('input[name^="default"]').map(function(){return $(this).val();}).get();
                var rq = $.ajax({
                    url: 'index.php?run=add_table',
                    method: "POST",
                    data: {name_table : name_table, namedb : name_db, name :field_name, type: field_type, size: field_size, default : select_default, is_n : is_null, index : select_index, ai : is_ai, def_i : default_i},
                });
                rq.success(function (result) {
                    $("#modal_info").modal("hide");
                    if (result != 1) {
                        $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                        $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                        $("#modal_info").modal("show");
                    }
                    else {
                        $("#modal_info").find(".modal-body").html("<p>La table "+name_table+"a été créé</p>");
                        $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                        $("#modal_info").find(".modal-footer").hide();
                        $("#modal_info").modal("show");
                        window.setTimeout(function () {
                            window.location.href = 'index.php?run=showDB&value='+name_db;
                        }, 1000);
                    }
                });
            })
        });




        $(".exportdb").submit(function (e) {
            e.preventDefault();
            let name_db = $("input[name='dbnameforexport']").val();
            let filename = $("input[name='filedbname']").val();


            let url = 'index.php?run=exportDB';

            $("#modal_info").find(".modal-body").html("<p>Export de la base de données "+name_db+" en cours de progression. Veuillez patientez...</p>");
            $("#modal_info").css("background-color", "rgba(1,1,16,0.7)");
            $("#modal_info").find(".modal-footer").hide();
            $("#modal_export_db").modal('hide');
            $("#modal_info").modal("show");
            let rq = $.ajax({
                url: url,
                method: "POST",
                data: {namedb : name_db, filename :filename},

            });
            rq.success(function (response , status, xhr) {
                //$("#modal_info").modal("hide");
                /*if (result != 1) {
                    $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                    $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                    $("#modal_info").modal("show");
                }
                else {*/
                $("#modal_info").find(".modal-body").html("<p>La base de données "+name_db+" a été exporté</p>");
                $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                //$("#modal_info").find(".modal-footer").hide();
                //$("#modal_export_db").modal('hide');
                //$("#modal_info").modal("show");


                var filename = "";
                var disposition = xhr.getResponseHeader('Content-Disposition');
                if (disposition && disposition.indexOf('attachment') !== -1) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                }

                var type = xhr.getResponseHeader('Content-Type');
                var blob = new Blob([response], { type: type });

                if (typeof window.navigator.msSaveBlob !== 'undefined') {
                    // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                    window.navigator.msSaveBlob(blob, filename);
                } else {
                    var URL = window.URL || window.webkitURL;
                    var downloadUrl = URL.createObjectURL(blob);

                    if (filename) {
                        // use HTML5 a[download] attribute to specify filename
                        var a = document.createElement("a");
                        // safari doesn't support this yet
                        if (typeof a.download === 'undefined') {
                            window.location = downloadUrl;
                        } else {
                            a.href = downloadUrl;
                            a.download = filename;
                            document.body.appendChild(a);
                            a.click();
                        }
                    } else {
                        window.location = downloadUrl;
                    }

                    setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                }




                window.setTimeout(function () {
                    $("#modal_info").modal("hide");
                }, 2000);

                // }
            });
        });

        $(".btnexportDBNOW").click(function () {
            $(".exportdb").submit();
        });



        $("#frmFileUpload").submit(function (e) {
            e.preventDefault();
            var name_db = $("input[name='db_name']").val();
            if (typeof name_db == "undefined") {
                name_db = false;
            }

            var file_data = Dropzone.forElement("#frmFileUpload").files[0];
            var form_data = new FormData();
            form_data.append('file', file_data);

            var url = 'index.php?run=uploadDb&dbname='+name_db;

            var rq = $.ajax({
                url: url,
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post'
            });
            rq.success(function (result) {
                $("#modal_info").modal("hide");
                if (result != 1) {
                    $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                    $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                    $("#modal_info").modal("show");
                }
                else {
                    $("#modal_info").find(".modal-body").html("<p>La base de données "+((false == name_db)? "" : name_db)+" a été importée</p>");
                    $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                    $("#modal_info").find(".modal-footer").hide();
                    $("#modal_info").modal("show");
                    if (false == name_db) {
                        window.setTimeout(function () {
                            location.reload();
                        }, 1000);
                    }
                    else {
                        window.setTimeout(function () {
                            window.location.href = 'index.php?run=showDB&value=' + name_db;
                        }, 1000);
                    }
                }
            });
        })

        $(".btnfileupload").click(function () {
            $("#frmFileUpload").submit();
        });


        $(".form_add_field").each(function () {
            $(this).submit(function (e) {
                e.preventDefault();
                $("#modal_add_field").modal('hide');
                var name_db = $("input[name='name_db']").val();
                var name_table = $("input[name='table_name_field']").val();
                var field_name = $('input[name^=field_name]').val();
                var field_type = $('select[name^=field_type_add]').val();
                var field_size = $('input[name^=field_size]').attr("data");
                var select_default = $('select[name^=select_default_add]').val();
                var is_null = $('select[name^=is_null]').val();
                var select_index = $('select[name^=select_index]').val();
                var is_ai = $('select[name^=is_ai]').val();
                var default_i = $('input[name^="default"]').val();
                var rq = $.ajax({
                    url: 'index.php?run=add_field',
                    method: "POST",
                    data: {name_table : name_table, namedb : name_db, name :field_name, type: field_type, size: field_size, default : select_default, is_n : is_null, index : select_index, ai : is_ai, def_i : default_i},
                });
                rq.success(function (result) {
                    $("#modal_info").modal("hide");
                    if (result != 1) {
                        $("#modal_info").find(".modal-body").html("<p>Erreur de type [SQL]</p><p>" + result + "</p>");
                        $("#modal_info").css("background-color", "rgba(246,184,173,0.7)");
                        $("#modal_info").modal("show");
                    }
                    else {
                        $("#modal_info").find(".modal-body").html("<p>La colonne "+field_name+" a été créé dans la table "
                            +name_table+" de la base "+name_db+"</p>");
                        $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                        $("#modal_info").find(".modal-footer").hide();
                        $("#modal_info").modal("show");
                        window.setTimeout(function () {
                            window.location.href = 'index.php?run=showTableStruct&dbname='+name_db+'&tName='+name_table;
                        }, 2000);
                    }
                });
            })
        });

        $(document).on('change, focusout', ".data", function (e){
            e.preventDefault();

            let new_value = $("input[name='newValue']").val();
            let name_db = $("input[name='name_db']").val();
            let table_name = $("input[name='tale_name']").val();
            let col_name_id = $(".btn-del-data").parent().siblings(":first").attr('name');
            let id_value = $('td:first', $(this).parents('tr')).text();
            id_value = id_value.replace(/[\s+][\s]/g, "");
            id_value = id_value.replace(/[" "]/g, "");
            let col_name_edit = $(this).attr('name');
            let rq = $.ajax({
                url: 'index.php?run=edit_data',
                data: {'name_db' : name_db, 'table_name' : table_name, 'id_col_name' : col_name_id, 'col_name_edit' : col_name_edit, 'id_value' : id_value, 'value' : new_value},
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
                    $.notify({'type': 'success', 'message': 'La donnée à bien été modifiée'}, 3500);

                }
            });

        });

        $(".form_delete_field").each(function () {
            $(this).submit(function (e) {
                e.preventDefault();
                $("#modal_delete_field").modal('hide');
                var table_name = $("input[name='table_name_field']").val();
                var db_name = $("input[name='name_db']").val();
                var name_field = $("input[name='name_field']").val();
                var rq = $.ajax({
                    url: 'index.php?run=delete_field&name_db=' + db_name + '&table_name=' + table_name + '&name_field=' + name_field,
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
                        $("#modal_info").find(".modal-body").html("<p>Le champs à bien été supprimée</p>");
                        $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                        $("#modal_info").find(".modal-footer").hide();
                        $("#modal_info").modal("show");
                        window.setTimeout(function () {
                            window.location.href = 'index.php?run=showTableStruct&dbname=' + db_name + '&tName=' + table_name;
                        }, 1000);
                    }
                })
            })
        });

        $(".form_edit_field").each(function () {
            $(this).submit(function (e) {
                e.preventDefault();
                var name_field_old = $("input[name='old_field_name']").val();
                $("#modal_edit_field" + name_field_old).modal('hide');
                var name_field = $(this).parent().find("input[name='new_field_name']").val();
                var new_type_field = $("select[name='field_type']").val();
                var new_size_field = $(this).parent().find("input[name='new_field_size']").val();
                var new_isNull_field = $(this).parent().find("select[name='new_isNull_name']").val();
                var new_default_field = $("select[name='select_default_edit']").val();
                var name_db = $("input[name='name_db']").val();
                var table_name = $("input[name='tale_name']").val();
                console.log("new : " + new_default_field);
                var rq = $.ajax({
                    url: 'index.php?run=edit_field',
                    data: {name_db:name_db, table_name:table_name, odl_field_name:name_field_old, new_field_name:name_field, new_type_field:new_type_field, new_size_field:new_size_field,
                        new_isNull_field:new_isNull_field,new_default_field:new_default_field},
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
                        $("#modal_info").find(".modal-body").html("<p>Le champs à bien été modifié</p>");
                        $("#modal_info").css("background-color", "rgba(148,251,146,0.7)");
                        $("#modal_info").find(".modal-footer").hide();
                        $("#modal_info").modal("show");
                        window.setTimeout(function () {
                            window.location.href = 'index.php?run=showTableStruct&dbname=' + name_db + '&tName=' + table_name;
                        }, 1000);
                    }
                })
            })
        });
    } else {
        alert('le sessionStorage n\'est pas implémenté sur ce navigateur');
    }
});


