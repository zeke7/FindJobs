function validate() {
      
    var pwd = $("#InputPassword1").val();
    var pwd1 = $("#InputPassword2").val();

    if (pwd == "") {
        $("#mima").html("密码不能为空");
        $("#mima").css("color","red");

    }else{

        $("#mima").html("");

    if(pwd == pwd1)
     {
        $("#tishi").html("两次密码相同");
         $("#tishi").css("color","green");
        $("#xiugai").removeAttr("disabled");
     }
    else {
        $("#tishi").html("两次密码不相同");
         $("#tishi").css("color","red")
          $("button").attr("disabled","disabled");  
      }
    }
}

function emptyornot(){
    var name = $("#InputPassword1").val();

    if (name == "") {
        $("#mima").html("密码不能为空");
        $("#mima").css("color","red");
    }
}