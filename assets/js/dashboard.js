//Created by kaway404

//Function start
function start(){
   openmodal();
}

start();


//Function open modal, login and register or error
function openmodal(){    
    $(".header .right button").click(function(){
        var href = $(this).data("href");
        showmodal();
        if(href == 0){
            showlogin();
        }
        else if(href == 1){
            showregister();
        }
        else if(href == 2){
            showinfouser();
        }
        else{
            showerror();
        }
    });
    
    //Verificar se saiu da div okay
    var hover = 0;

    $(".header .logo").click(function(){
        closemodal();
    });

    $("#okay").hover(function(){
        hover = 0;
    });

    $("#okay").mouseover(function(){
        hover = 1;
    });

    $("#okay2").hover(function(){
        hover = 0;
    });

    $("#okay2").mouseover(function(){
        hover = 1;
    });

    $("#okay3").hover(function(){
        hover = 0;
    });

    $("#okay3").mouseover(function(){
        hover = 1;
    });

    $(".overlay").click(function(){
        if(hover == 0){
            closemodal();
        }
    });

    $(".infouser").hover(function(){
        hover = 0;
    });

    $(".infouser").mouseover(function(){
        hover = 1;
    });

    function showinfouser(){
        $(".overlay").css("z-index", "60");
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $("body").css("overflow", "hidden");
        $(".overlay .infouser").css("transform", "translate(-50%, -50%)");
        $(".overlay .product").css("transform", "translate(-1350%, -50%)");
    }

    function showmodal(){
        $(".overlay").css("z-index", "60");
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $("body").css("overflow", "hidden");
        $(".overlay .register").css("transform", "translate(-1350%, -50%)");
        $(".overlay .error").css("transform", "translate(-1350%, -50%)");
        $(".overlay .login").css("transform", "translate(-1350%, -50%)");
    }
    
    function closemodal(){
        $(".overlay").css("z-index", "-2");
        $("body").css("overflow", "auto");
        $("#loginbtn").css("background-color", "#211D26");
        $("#registerbtn").css("background-color", "#211D26");
        $(".overlay .login").css("transform", "translate(-1350%, -50%)");
        $(".overlay .register").css("transform", "translate(-1350%, -50%)");
        $(".overlay .error").css("transform", "translate(-1350%, -50%)");
        $(".overlay .product").css("transform", "translate(-1350%, -50%)");
        $("#okay4").css("transform", "translate(-1350%, -50%)");
        $(".overlay .infouser").css("transform", "translate(-1350%, -50%)");
    }
    
    function showlogin(){
        $("#loginbtn").css("background-color", "#441B2F");
        $("#registerbtn").css("background-color", "#211D26");
        $(".overlay .login").css("transform", "translate(-50%, -50%)");
        $(".overlay .register").css("transform", "translate(-1350%, -50%)");
        $(".overlay .error").css("transform", "translate(-1350%, -50%)");
        $(".overlay .product").css("transform", "translate(-1350%, -50%)");
        $("#okay4").css("transform", "translate(-1350%, -50%)");
    }
    
    function showregister(){
        $("#loginbtn").css("background-color", "#211D26");
        $("#registerbtn").css("background-color", "#441B2F");
        $(".overlay .register").css("transform", "translate(-50%, -50%)");
        $(".overlay .error").css("transform", "translate(-1350%, -50%)");
        $(".overlay .login").css("transform", "translate(1350%, -50%)");
        $(".overlay .product").css("transform", "translate(-1350%, -50%)");
    }
    
    function showerror(){
        $(".overlay .register").css("transform", "translate(-1350%, -50%)");
        $(".overlay .error").css("transform", "translate(-1350%, -50%)");
        $(".overlay .login").css("transform", "translate(-1350%, -50%)");
        $(".overlay .product").css("transform", "translate(-1350%, -50%)");
    }

    function showproduct(){
        $(".overlay .register").css("transform", "translate(-1350%, -50%)");
        $(".overlay .error").css("transform", "translate(-1350%, -50%)");
        $(".overlay .login").css("transform", "translate(-1350%, -50%)");
        $("#okay4").css("transform", "translate(-50%, -50%)");
        $(".overlay .infouser").css("transform", "translate(-1350%, -50%)");
    }

    function produtosclo(){
        $(".window").click(function(){
            showproduct();
            var name = $(this).data("name");
            var title = $(this).data("title");
            var image = $(this).data("image");
    
            showmodal();
    
            $(".product h1").html(name);
            $(".product h2").html(title);
            $(".product img").attr("src", image);
        });
    
        $("#okay4").hover(function(){
            hover = 0;
        });
    
        $("#okay4").mouseover(function(){
            hover = 1;
        });

        $("#okay4 #cancelar").click(function(){
            closemodal();
        });

    }

    produtosclo();
}