var x=document.getElementById("texte");
function change(){
    event.preventDefault();
    if (x.style.fontWeight=="bold"){
        x.style.fontWeight="normal";
}else
x.style.fontWeight="bold";
}
function fonte(){
    x.style.fontSize=document.getElementById("fs").value;
}
function ital(){
    event.preventDefault();
    if (x.style.fontStyle=="italic"){
        x.style.fontStyle="normal";
}else
x.style.fontStyle="italic";
}
function under(){
    event.preventDefault();
    if (x.style.textDecoration=="underline"){
        x.style.textDecoration="none";
}else
x.style.textDecoration="underline";
}
function val(){
    x.style.fontFamily=document.getElementById("vl").value;
}
$("button").css("opacity","0");
$(".b1").mouseenter(
    function(){
     $(".b1").css({"opacity":"0.5","background-color":"black"});
     $(".b1 button").css("opacity","1");
    }
)
$(".b1").mouseleave(
    function(){
     $(".b1").css({"opacity":"1"});
     $(".b1 button").css("opacity","0");
    }
)

$(".b2").mouseenter(
    function(){
     $(".b2").css({"opacity":"0.5","background-color":"black"});
     $(".b2 button").css("opacity","1");
    }
)
$(".b2").mouseleave(
    function(){
     $(".b2").css({"opacity":"1"});
     $(".b2 button").css("opacity","0");
    }
)

$(".b3").mouseenter(
    function(){
     $(".b3").css({"opacity":"0.5","background-color":"black"});
     $(".b3 button").css("opacity","1");
    }
)
$(".b3").mouseleave(
    function(){
     $(".b3").css({"opacity":"1"});
     $(".b3 button").css("opacity","0");
    }
)

$(".b4").mouseenter(
    function(){
     $(".b4").css({"opacity":"0.5","background-color":"black"});
     $(".b4 button").css("opacity","1");
    }
)
$(".b4").mouseleave(
    function(){
     $(".b4").css({"opacity":"1"});
     $(".b4 button").css("opacity","0");
    }
)

$(".b5").mouseenter(
    function(){
     $(".b5").css({"opacity":"0.5","background-color":"black"});
     $(".b5 button").css("opacity","1");
    }
)
$(".b5").mouseleave(
    function(){
     $(".b5").css({"opacity":"1"});
     $(".b5 button").css("opacity","0");
    }
)

$(".b6").mouseenter(
    function(){
     $(".b6").css({"opacity":"0.5","background-color":"black"});
     $(".b6 button").css("opacity","1");
    }
)
$(".b6").mouseleave(
    function(){
     $(".b6").css({"opacity":"1"});
     $(".b6 button").css("opacity","0");
    }
)

$(".b7").mouseenter(
    function(){
     $(".b7").css({"opacity":"0.5","background-color":"black"});
     $(".b7 button").css("opacity","1");
    }
)
$(".b7").mouseleave(
    function(){
     $(".b7").css({"opacity":"1"});
     $(".b7 button").css("opacity","0");
    }
)

$(".b8").mouseenter(
    function(){
     $(".b8").css({"opacity":"0.5","background-color":"black"});
     $(".b8 button").css("opacity","1");
    }
)
$(".b8").mouseleave(
    function(){
     $(".b8").css({"opacity":"1"});
     $(".b8 button").css("opacity","0");
    }
)

$(".b9").mouseenter(
    function(){
     $(".b9").css({"opacity":"0.5","background-color":"black"});
     $(".b9 button").css("opacity","1");
    }
)
$(".b9").mouseleave(
    function(){
     $(".b9").css({"opacity":"1"});
     $(".b9 button").css("opacity","0");
    }
)

$(".i1").mouseenter(
    function(){
     $(".i1").css({"opacity":"0.5","background-color":"black"});
     $(".i1 button").css("opacity","1");
    }
)
$(".i1").mouseleave(
    function(){
     $(".i1").css({"opacity":"1"});
     $(".i1 button").css("opacity","0");
    }
)

$(".i2").mouseenter(
    function(){
     $(".i2").css({"opacity":"0.5","background-color":"black"});
     $(".i2 button").css("opacity","1");
    }
)
$(".i2").mouseleave(
    function(){
     $(".i2").css({"opacity":"1"});
     $(".i2 button").css("opacity","0");
    }
)

$(".i3").mouseenter(
    function(){
     $(".i3").css({"opacity":"0.5","background-color":"black"});
     $(".i3 button").css("opacity","1");
    }
)
$(".i3").mouseleave(
    function(){
     $(".i3").css({"opacity":"1"});
     $(".i3 button").css("opacity","0");
    }
)
