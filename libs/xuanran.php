<?php
    header('Access-Control-Allow-Origin:*');
    //连接数据库
    include('./conn.php');
    // $small = $_REQUEST['small'];

    // $sql = "select * from product where small='$small'";
    $sql = "select * from product";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>