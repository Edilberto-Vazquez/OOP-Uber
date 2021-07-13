<?php
require_once("./Account.php")
class Car {
  public $id = integer;
  public $license = string;
  public $driver = Account();
  public $passenger = integer;

  public function __construct($license, $driver) {
    $this->license = $license;
    $this->$driver = $driver;
  }

  public function printDataCar() {
    echo "License: $this->license Driver: {$this->driver->name}";
  }
}
?>