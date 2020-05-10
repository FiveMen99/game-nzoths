<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="style.css" >
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body class="background">
    <div class="authorization h1-1">
        <h1 class="h1-1">Авторизация</h1>
        <div class="in-1">
            <span class="sp-1"">Email
            <input type="text" name="login" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="in-1">
            <span class="sp-1"">Пароль
            <input type="password" name="password" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        </div>
        <button class="btn btn-outline-primary btn-1 white" onclick="authorization();">Вход</button>
        <button  class="btn btn-outline-primary btn-1 white" onclick="registration_go();" data-toggle="modal" data-target="#exampleModal">Регистрация</button>
        <h6 class="white al-1" id="hh1">Неправильный пароль!</h6>
    </div>
</body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script>
    function registration_go() {
        document.location.href = "registration.php";
    }
    function authorization()
    {
        let login = $('[name = "login"]').val();
        let password = $('[name = "password"]').val();
        $.ajax({
            type: "POST",
            url: "authorization.php",
            data: 'login=' + login + '&' + 'password=' + password,
            success: function (msg) {
                if (msg == "ok")
                {
                    document.location.href = "profile.php";
                }
                else
                {
                    $("#hh1").css('display', 'block');
                    $('#hh1').html(msg);
                }
            }
        });
    }

</script>