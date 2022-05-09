<?php
class Alumno {
    function construir($nombre, $apellido, $edad, $nota){
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->edad = $edad;
        $this->nota = $nota;
      }
    
      public function set_nombre($nombre) {
        $this->nombre = $nombre;
      }
      public function get_nombre() {
        return $this->nombre;
      }
      public function set_apellido($apellido) {
        $this->apellido = $apellido;
      }
      public function get_apellido() {
        return $this->apellido;
      }
      public function set_edad($edad) {
        $this->edad = $edad;
      }
      public function get_edad() {
        return $this->edad;
      }
      public function set_nota($nota) {
        $this->nota = $nota;
      }
      public function get_nota() {
        return $this->nota;
      }
    }


$nombre = $_REQUEST['nombre'];
$apellido = $_REQUEST['apellido'];
$edad = $_REQUEST['edad'];
$nota = $_REQUEST['nota'];
$alumnote = new Alumno($nombre,$apellido,$edad,$nota);
$array_alumnos = [];
array_push($array_alumnos, $alumnote);
if ($array_alumnos == null){
  $objetoFueCreado = false;
  echo "<br><b>error</b><br><br>";
}
else{$objetoFueCreado = true;
  echo "<br><b>OK</b><br><br>";
}
?>