
$(document).on('dblclick', ".data", function (){
    //$(".data").dblclick(function () {
    if (!lastState) {
        let OriginalContent = $(this).text();
        lastState = true;
        $(this).addClass("cellEditing");
        OriginalContent = OriginalContent.replace(/[" "]/g, "");
        $(this).html("<input type='text' name='newValue' class='form-control w100 dataEdit' value=' " + OriginalContent + "' />");
        $(this).children().first().focus();
        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                let newContent = $(this).val();
                $(this).parent().text(newContent);
                $(this).parent().removeClass("cellEditing");
                lastState = false;
            }
        });
        $(this).children().first().change(function (e) {
            let newContent = $(this).val();
            $(this).parent().text(newContent);
            $(this).parent().removeClass("cellEditing");
            lastState = false;
        });
        $(this).children().first().blur(function () {
            $(this).parent().text(OriginalContent);
            $(this).parent().removeClass("cellEditing");
            lastState = false;
        });
    }
    //});
});

