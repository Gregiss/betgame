//Login button
$("#okay button").click(function(){
    var email = $("#okay #email").val();
    var senha = $("#okay #senha").val();
    var error = '';
    $.post("/login", {email: email, password: senha},
        function(data){
             if(data == "campos"){
                error = 'Preencha os campos';
             }
             else if(data == 'senha'){
                 error = 'Email ou senha invalidos';
             }
             else if(data == 'sucess'){
                error = 'Aguarde um momento';
                location.reload();
             }
             $("#okay .errort").html(error);
         }
         , "html");
         return false;
});

//Register button
$("#okay2 button").click(function(){
    var email = $("#okay2 #email").val();
    var senha = $("#okay2 #senha").val();
    var username = $("#okay2 #username").val();
    $.post("/register", {email: email, password: senha, username: username},
        function(data){
            if(data == "campos"){
                error = 'Preencha os campos';
             }
             else if(data == 'senha'){
                 error = 'Email ou senha invalidos';
             }
             else if(data == 'try'){
                 error = 'Tente novamente mais tarde';
             }
             else if(data == 'sucess'){
                 error = 'Aguarde um momento';
                 $("#loginbtn").css("background-color", "#441B2F");
                 $("#registerbtn").css("background-color", "#211D26");
                 $(".overlay .login").css("transform", "translate(-50%, -50%)");
                 $(".overlay .register").css("transform", "translate(-1350%, -50%)");
                 $(".overlay .error").css("transform", "translate(-1350%, -50%)");
                 $("#okay4").css("transform", "translate(-1350%, -50%)");
             }
             $("#okay2 .errort").html(error);
         }
         , "html");
         return false;
});