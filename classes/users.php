<?php
class users
{
    static function sql_read_by_login($pdo, $login)
    {
        $result=$pdo->prepare('SELECT * FROM `users` WHERE login=:login');
        $result->execute(array('login' => $login));
        return $result;
    }
    static function sql_read_by_nickname($pdo, $nickname)
    {
        $result=$pdo->prepare('SELECT * FROM `users` WHERE nickname=:nickname');
        $result->execute(array('nickname' => $nickname));
        return $result;
    }
    static function sql_read_by_id($pdo, $id)
    {
        $result=$pdo->prepare('SELECT * FROM `users` WHERE id=:id');
        $result->execute(array('id' => $id));
        return $result;
    }
    static function create($pdo, $login, $password,$nickname)
    {
        $stmt = $pdo->prepare('INSERT INTO `users` (`login`, `password`,`nickname`) VALUES (:login, :password, :nickname)');
        $stmt->execute(array('login'=>$login,'password'=>$password,'nickname'=>$nickname));
    }
}
