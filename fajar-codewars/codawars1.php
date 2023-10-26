<?php
//Task 1
//Write a function that takes an array of numbers and returns the sum of the numbers. 
//The numbers can be negative or non-integer. 
//If the array does not contain any numbers then you should return 0.
//Input : [1, 5.2, 4, 0, -1], Output : 9.2
//Input : [], Output : 0
//Input : [-2.398], Output : -2.398
//My solution :
function sum1(array $a) {
    foreach ($a as $element) {
        if (!is_numeric($element)) {
            return 0;
        }
    }
    $sum = 0;
    foreach ($a as $element) {
        $sum += $element;
    }
    return $sum;
}
//Pro Solution : 
//1 
function sum2(array $a): float { //dia kasih "float" untuk memastikan function hanya menerima data float (yaitu angka)
    return array_sum($a); //lalu dia langsung return hasil sum-nya memakai built-in function
}
//2
function sum3(array $a): float {
    return ($a) ? array_sum($a) : 0; //dia cek apakah nilai yang dikasih sudah true (beneran data float)
} //lalu dia bikin operator ternary dan memastikan kalo parameter yang dikasih false maka return 0, kalo parameter true maka balikin hasil sum

//Task 2
//Given an array of integers, return a new array with each value doubled.
//Input : [1, 2, 3], Output : [2, 4, 6]
//My solution :
function maps($x) {
    /*
    $xDoubled = [];
    foreach($x as $element) {
        $xDoubled[] = $element * 2;
    } 
    return $xDoubled;
    */
    /*
    return array_map(function($element) {
        return $element * 2;
    }, $x); //ini cara pakai array_map(), kalo yg atas itu cara manual
    */
    return array_map(fn($element) => $element * 2, $x); //pakai array_map() dan bentuk arrow function
}
/*
$maps2 = fn($x) => array_map(fn($element) => $element * 2, $x); //bisa dibikin 1 baris, bentuk arrow function
var_dump($maps2([1, 2, 3])); //tetapi cara memanggilnya dia dianggap menjadi variable
*/
//Pro solution :
//1
function maps3($x)
{
    foreach ($x as $element)
    {
        $element*=2; //sama saja seperti $xy = $xy * 2;
    }
    return $x; //dengan cara manual foreach, tiap element dibuat bernilai element itu sendiri dikalikan dengan 2
} //cara dari my solution masih lebih bagus 