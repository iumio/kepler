<?php
$variables = [
    'TOKEN' => 'YOUR_TOKEN',
];
foreach ($variables as $key => $value) {
    putenv("$key=$value");
}
