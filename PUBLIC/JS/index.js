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


    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/
    $(".btn-edit-field").click(function (e) {
        e.preventDefault();
        var field_name = $(this).attr("name");
        var field_type = $(this).attr("field_type");
        field_type = field_type.toUpperCase();
        $("select[name='field_type']").val(field_type);
        $("#modal_edit_field" + field_name).modal('show');
        $(".text-info").html(field_name);
    });
    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/

    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/
    $(".btn-add-field").click(function (e) {
        e.preventDefault();
        $("#modal_add_field").modal('show');
    });
    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/

    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/
    $(".btn-del-field").click(function (e) {
        e.preventDefault();
        var field_name = $(this).attr("name");
        $("#modal_delete_field").modal('show');
        $(".text-info").html(field_name);
        $("input[name='name_field']").val(field_name);
    });
    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/

    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/
    $("#sd_edit").change(function () {
        var value = $(this).val();
        if (value == "def")
            $("input[name='default_edit']").show();
        else
            $("input[name='default_edit']").hide();
    });
    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/



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

    $(".btn-edit-field").click(function (e) {
        e.preventDefault();
        var field_name = $(this).attr("name");
        var field_type = $(this).attr("field_type");
        field_type = field_type.toUpperCase();
        $("select[name='field_type']").val(field_type);
        $("#modal_edit_field"+field_name).modal('show');
    });

    $(".btn-delete-table").click(function (e) {
        var table_name = $(this).attr("name");
        e.preventDefault();
        $("#modal_delete_table").modal('show');
        //$(".text-info").html(table_name);
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

    $("#sd").change(function () {
        var value = $(this).val();
        if(value == "def")
            $("input[name^='default']").show();
        else
            $("input[name^='default']").hide();
    });

    $(".btn-add-field-in-tab").click(function (e) {
        e.preventDefault();
        $("#tab_add_field").prepend('<tr><td><input type="text" class="form-control" name="field_name[]" required="required" /> </td> <td> <select class="form-control" name="field_type[]"> <option value="INT" title="Un nombre entier de 4 octets. La fourchette des entiers relatifs est de -2 147 483 648 à 2 147 483 647. Pour les entiers positifs, c&opencurlyquote;est de 0 à 4 294 967 295">INT</option> <option value="VARCHAR" title="Une chaîne de longueur variable (0-65,535), la longueur effective réelle dépend de la taille maximum d&opencurlyquote;une ligne">VARCHAR</option> <option value="TEXT" title="Une colonne TEXT d&opencurlyquote;une longueur maximum de 65 535 (2^16 - 1) caractères, stockée avec un préfixe de deux octets indiquant la longueur de la valeur en octets">TEXT</option> <option value="DATE" title="Une date, la fourchette est de «1000-01-01» à «9999-12-31»">DATE</option> <optgroup label="Numérique"> <option value="TINYINT" title="Un nombre entier de 1 octet. La fourchette des nombres avec signe est de -128 à 127. Pour les nombres sans signe, c&opencurlyquote;est de 0 à 255">TINYINT</option> <option value="SMALLINT" title="Un nombre entier de 2 octets. La fourchette des nombres avec signe est de -32 768 à 32 767. Pour les nombres sans signe, c&opencurlyquote;est de 0 à 65 535">SMALLINT</option> <option value="MEDIUMINT" title="Un nombre entier de 3 octets. La fourchette des nombres avec signe est de -8 388 608 à 8 388 607. Pour les nombres sans signe, c&opencurlyquote;est de 0 à 16 777 215">MEDIUMINT</option> <option value="INT" title="Un nombre entier de 4 octets. La fourchette des entiers relatifs est de -2 147 483 648 à 2 147 483 647. Pour les entiers positifs, c&opencurlyquote;est de 0 à 4 294 967 295">INT</option> <option value="BIGINT" title="Un nombre entier de 8 octets. La fourchette des nombres avec signe est de -9 223 372 036 854 775 808 à 9 223 372 036 854 775 807. Pour les nombres sans signe, c&opencurlyquote;est de 0 à 18 446 744 073 709 551 615">BIGINT</option> <option disabled="disabled">-</option> <option value="DECIMAL" title="Un nombre en virgule fixe (M, D) - le nombre maximum de chiffres (M) est de 65 (10 par défaut), le nombre maximum de décimales (D) est de 30 (0 par défaut)">DECIMAL</option> <option value="FLOAT" title="Un petit nombre en virgule flottante, la fourchette des valeurs est -3.402823466E+38 à -1.175494351E-38, 0, et 1.175494351E-38 à 3.402823466E+38">FLOAT</option> <option value="DOUBLE" title="Un nombre en virgule flottante double-précision, la fourchette des valeurs est -1.7976931348623157E+308 à -2.2250738585072014E-308, 0, et 2.2250738585072014E-308 à 1.7976931348623157E+308">DOUBLE</option> <option value="REAL" title="Synonyme de DOUBLE (exception : dans le mode SQL REAL_AS_FLOAT, c&opencurlyquote;est un synonyme de FLOAT)">REAL</option> <option disabled="disabled">-</option> <option value="BIT" title="Une colonne contenant des bits (M), stockant M bits par valeur (1 par défaut, maximum 64)">BIT</option> <option value="BOOLEAN" title="Un synonyme de TINYINT(1), une valeur de zéro signifie faux, une valeur non-zéro signifie vrai">BOOLEAN</option> <option value="SERIAL" title="Un alias pour BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE">SERIAL</option> </optgroup> <optgroup label="Contient la date et l&opencurlyquote;heure"> <option value="DATE" title="Une date, la fourchette est de «1000-01-01» à «9999-12-31»">DATE</option> <option value="DATETIME" title="Une combinaison date et heure, la fourchette est de «1000-01-01 00:00:00» à «9999-12-31 23:59:59»">DATETIME</option> <option value="TIMESTAMP" title="Un type d&opencurlyquote;horodatage, la fourchette est de «1970-01-01 00:00:01» UTC à «2038-01-09 03:14:07» UTC, en nombre de secondes depuis le moment de référence («1970-01-01 00:00:00» UTC)">TIMESTAMP</option> <option value="TIME" title="Une heure, la fourchette est de «-838:59:59» à «838:59:59»">TIME</option> <option value="YEAR" title="Une année à quatre chiffres (4 par défaut) ou à deux chiffres (2), la fourchette est de 70 (1970) à 69 (2069) ou 1901 à 2155 ainsi que 0000">YEAR</option> </optgroup> <optgroup label="Chaîne de caractères"> <option value="CHAR" title="Une chaîne de longueur fixe (0-255, 1 par défaut) qui est toujours complétée à droite par des espaces lorsqu&opencurlyquote;enregistrée">CHAR</option> <option value="VARCHAR" title="Une chaîne de longueur variable (0-65,535), la longueur effective réelle dépend de la taille maximum d&opencurlyquote;une ligne">VARCHAR</option> <option disabled="disabled">-</option> <option value="TINYTEXT" title="Une colonne de type TEXT d&opencurlyquote;une longueur maximum de 255 (2^8 - 1) caractères, stockée avec un préfixe d&opencurlyquote;un octet indiquant la longueur de la valeur en octets">TINYTEXT</option> <option value="TEXT" title="Une colonne TEXT d&opencurlyquote;une longueur maximum de 65 535 (2^16 - 1) caractères, stockée avec un préfixe de deux octets indiquant la longueur de la valeur en octets">TEXT</option> <option value="MEDIUMTEXT" title="Une colonne TEXT d&opencurlyquote;une longueur maximum de 16 777 215 (2^24 - 1) caractères, stockée avec un préfixe de trois octets indiquant la longueur de la valeur en octets">MEDIUMTEXT</option> <option value="LONGTEXT" title="Une colonne TEXT d&opencurlyquote;une longueur maximum de 4 294 967 295 ou 4 GiB (2^32 - 1) caractères, stockée avec un préfixe de quatre octets indiquant la longueur de la valeur en octets">LONGTEXT</option> <option disabled="disabled">-</option> <option value="BINARY" title="Similaire au type CHAR, mais stocke des chaînes binaires au lieu de chaînes non binaires">BINARY</option> <option value="VARBINARY" title="Similaire au type VARCHAR, mais stocke des chaînes binaires au lieu de chaînes non binaires">VARBINARY</option> <option disabled="disabled">-</option> <option value="TINYBLOB" title="Une colonne BLOB d&opencurlyquote;une longueur maximum de 255 (2^8 - 1) octets, stockée avec un préfixe d&opencurlyquote;un octet indiquant la longueur de la valeur">TINYBLOB</option> <option value="MEDIUMBLOB" title="Une colonne BLOB d&opencurlyquote;une longueur maximum de 16 777 215 (2^24 - 1) octets, stockée avec un préfixe de trois octets indiquant la longueur de la valeur">MEDIUMBLOB</option> <option value="BLOB" title="Une colonne BLOB d&opencurlyquote;une longueur maximum de 65 535 (2^16 - 1) octets, stockée avec un préfixe de quatre octets indiquant la longueur de la valeur">BLOB</option> <option value="LONGBLOB" title="Une colonne BLOB d&opencurlyquote;une longueur maximum de 4 294 967 295 ou 4GiB (2^32 - 1), stockée avec un préfixe de quatre octets indiquant la longueur de la valeur">LONGBLOB</option> <option disabled="disabled">-</option> <option value="ENUM" title="Une énumération, choisie parmi une liste comportant jusqu&opencurlyquote;à 65 535 valeurs ou la valeur spéciale &opencurlyquote; &opencurlyquote; indiquant une erreur">ENUM</option> <option value="SET" title="Une valeur unique choisie parmi un ensemble comportant jusqu à 64 membres">SET</option> </optgroup> <optgroup label="Spatial"> <option value="GEOMETRY" title="Un type pouvant stocker une valeur géométrique de tout type">GEOMETRY</option> <option value="POINT" title="Un point dans un espace à deux dimensions">POINT</option> <option value="LINESTRING" title="Une courbe avec une interpolation linéaire entre les points">LINESTRING</option> <option value="POLYGON" title="Un polygone">POLYGON</option> <option value="MULTIPOINT" title="Une collection de points">MULTIPOINT</option> <option value="MULTILINESTRING" title="Une collection de courbes avec l&opencurlyquote;interpolation linéaire entre les points">MULTILINESTRING</option> <option value="MULTIPOLYGON" title="Une collection de polygones">MULTIPOLYGON</option> <option value="GEOMETRYCOLLECTION" title="Une collection d&opencurlyquote;objets de géométrie de tout type">GEOMETRYCOLLECTION</option> </optgroup> </select> </td> <td> <input type="text" class="form-control field_size" name="field_size[]" data="NV" /> </td> <td> <select class="form-control" name="select_default[]"> <option selected>Aucune</option> <option value="def">Tel que défini : </option> <option value="NULL">NULL</option> <option value="CURRENT_TIMESTAMP">CURRENT_TIMESTAMP</option> </select> <input type="text" class="form-control input-sm noShow marginTop20" name="default[]"/> </td> <td><select class="form-control" name="is_null[]"> <option value="no" selected="selected">Non</option> <option value="yes">Oui</option> </select> </td><td> <select class="form-control" name="select_index[]"> <option value="NULL" selected>---</option> <option value="PRIMARY">PRIMARY</option> <option value="UNIQUE">UNIQUE</option> <option value="INDEX">INDEX</option> <option value="FULLTEXT">FULLTEXT</option> </select> </td> <td><select class="form-control" name="is_ai[]"> <option value="no" selected="selected">Non</option> <option value="yes">Oui</option> </select> </td> </tr>');
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
            var name_table = $(".text-info").html();
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
                console.log(result)
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
            })

            /*var table_name = $("input[name='tale_name']").val();
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
            })*/
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
            var rq = $.ajax({
                url: 'index.php?run=edit_data&name_db='+name_db+'&table_name='+table_name+'&id_col_name='+col_name_id+'&col_name_edit='+col_name_edit+'&id_value='+id_value+'&value='+new_value,
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
                   $("#modal_info").find(".modal-body").html("<p>La donnée à bien été Modifiée</p>");
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

    /********************************************************************************
    *******************************************************************************
    *******************************************************************************/
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
            var field_name = $('.btn-edit-field').attr("name");
            $("#modal_edit_field" + field_name).modal('hide');
            var name_field = $("input[name='new_field_name']").val();
            var type_field = $("select[name='field_type']").val();
            var size_field = $("input[name='new_field_size']").val();
            var isNull_field = $("input[name='new_isNull_name']").val();
            var default_field = $("select[name='select_default_edit']").val();
            console.log('nom : ' + name_field);
            console.log('type : ' + type_field);
            console.log('size : ' + size_field);
            console.log('is null : ' + isNull_field);
            console.log('default : ' + default_field);
            /*var rq = $.ajax({
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
             }, 2000);
             }
             })*/
        })
    });
    /********************************************************************************
     *******************************************************************************
     *******************************************************************************/
});


