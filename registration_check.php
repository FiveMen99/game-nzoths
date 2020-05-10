<?php
require_once("bd.php");
require_once("classes/users.php");
$login=trim($_POST['login']);
$password=trim($_POST['password']);
$password1=trim($_POST['password1']);
$nickname=trim($_POST['nickname']);

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $result=users::sql_read_by_login($pdo,$login);
    $row1 = $result->fetch(PDO::FETCH_ASSOC);
    if (empty($row1))
    {
        $result1=users::sql_read_by_nickname($pdo,$nickname);
        $row2 = $result1->fetch(PDO::FETCH_ASSOC);
        if (empty($row2))
        {
            if($password==$password1)
            {
                $password=password_hash($password , PASSWORD_DEFAULT);
                users::create($pdo,$login,$password,$nickname);
                echo "ok";
            }
            else
            {
                echo "Пароли не совпадают";
            }
        }
        else
        {
            echo "Такой nickname уже занят";
        }

    }
    else
    {
        echo "Такой email уже занят";
    }
}
else
{
    echo "Подключитесь по нормальному";
}