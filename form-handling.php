<?php
if(!empty($_POST)) {
    $to = 'menshickowserezha@yandex.ru, ';
    $to .= '102010@inbox.ru';
    $subject = 'Письмо от сайта junior.team-firestorm.ru';
    $content = '';
 
    foreach($_POST as $key => $value) {
        $updatedValue = htmlspecialchars($value);
        $content .= '
            <tr>
                <td>'.$key.'</td><td>'.$updatedValue.'</td>
            </tr>
        ';
    }
    $messageString = '
        <p>Тестовое содержимое <br /> Вторая строка текста</p>
        <table>'.$content.'</table>
    ';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 

    mail($to, $subject, $messageString, $headers);
}
?>
 