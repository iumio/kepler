$(function () {
    $(".data").dblclick(function () {
        var OriginalContent = $(this).text(); $(this).addClass("cellEditing");
        OriginalContent = OriginalContent.replace(/[" "]/g, "");
        $(this).html("<input type='text' name='newValue' class='form-control' value='" + OriginalContent + "' />");
        $(this).children().first().focus();
        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                var newContent = $(this).val();
                $(this).parent().text(newContent);
                $(this).parent().removeClass("cellEditing");
            }
        });
        $(this).children().first().blur(function(){
            $(this).parent().text(OriginalContent);
            $(this).parent().removeClass("cellEditing");
        });
    });
});

