<?php
$array = ["banana","bottle","ball"];
$variableA= 1;
$variableB= 2;
$variableC= ($variableA+$variableB);
$p1= 3;
$p2= $p1*3;
//$p2 = 4 inferior a 5
//$p2 = 5 igual a 5
if ($p2 > 5){
    $divisor = 4;
}
elseif ($p2 == 5){
    $divisor = 1;
}
else {$divisor = 8;};

$p3= (($p1+$p2)/$divisor);
$pfallido= (($p1+$p2)/8);
$psuma= (($p1+$p2)/1);


switch ($p2) {
    case ($p2 > 5):
        $divisorcase = 4;
        break;
    case ($p2 == 5):
        $divisorcase = 1;
        break;
    default:
        $divisorcase = 8;
        break;
}
$p3case= (($p1+$p2)/$divisorcase);

echo "
<html>
<head>
    <title> Ejercicios Semana 22 </title>
</head>
<body>
<h1> My first PHP page </h1>
<p>No alarmarse. Esto ser una página de pruebas </p>
<p>El valor de la variable sumada es de $variableC <p>Además, el resultado de la operación es de $p3<p> Si la variable fuera inferior a 5, el resultado sería $pfallido<p> Y si fuera igual, daría $psuma</p>
<p> Switch-case : $p3case
<p> Tabla del $p1:";
for ($i=1; $i<11; $i++){
    $resultado = $p1*$i;
    echo "<p>Multiplicar $p1 por $i da de resultado $resultado</p>";
}
echo"
<p> Tabla de divisiones de $p2:";
for ($i=1; $i<11; $i++){
    $resultado = $p2/$i;
    echo "<p>Dividir $p2 por $i da de resultado $resultado</p>";
}
echo "<p> Creación de array y muestra:</p>";
for ($i=0; $i<3; $i++){
    $resultado= $array[$i];
    echo "<p>Palabra número $i: $resultado</p>";
}
echo"
</body>
</html>
";

?>