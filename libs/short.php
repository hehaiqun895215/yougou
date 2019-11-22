<?php
    include('./conn.php');
    header('content-type:text/html;charset=utf-8');
    $userphone = $_REQUEST['phone'];


    $sql = "select * from user where user_phone='$userphone' ";
    $result = $mysqli->query($sql); //执行查询语句

    if($result->num_rows>0 ){
        echo  '{"msg":"登录成功"}';
    }else{
        echo '{"msg":"请重新检查手机号"}';
    }
    $mysqli->close();
?>      