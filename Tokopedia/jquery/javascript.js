$(document).ready (function){
    $("#notelp").val().length > 3){
        if($(".nom").removeAttr(disable)){
            $(".nom").css("background-color", "white");
            $(".btn").removeAttr("disable");
            $(".btn").css("background-color", "#f991c");

        }else{
            $(".nom").prop("disable", true);
            $(".btn").prop)"disable", true);
            $(".nom").css("background-color", "#e8dcdc");
        }
    });
});
