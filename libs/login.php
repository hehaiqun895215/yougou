<?php
header('Access-Control-Allow-Origin:*');
    include('./conn.php');
    $userphone = $_REQUEST['userphone'];
    $password = $_REQUEST['userpass'];

    $sql = "select * from user where user_phone='$userphone' AND  user_password='$password'";
    $result=$mysqli->query($sql);
    if($result->num_rows>0){
        echo '{"msg":"登录成功"}';
    }else{
        echo '{"msg":"请重新检查用户名和密码"}';
    }
    $mysqli->close();
?>      