<?php
require_once("bd.php");
require_once("classes/users.php");
$login=trim($_POST['login']);
$password=trim($_POST['password']);
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $result=users::sql_read_by_login($pdo,$login);
    $row=$result->fetch(PDO::FETCH_ASSOC);
    if(!empty($row))
    {
        if(password_verify($password,$row['password']))
        {
            echo "ok";
            session_start();
            $_SESSION['id']=$row['id'];
        }
        else
        {
            echo "Неправильный пароль";
        }
    }
    else
    {
        echo "Такого логина не существует";
    }
}
else
{
    echo "Авторизуйтесь нормально";
}
