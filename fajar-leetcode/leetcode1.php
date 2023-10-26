<?php

//Task 2
//Running Sum of 1d Array
//Given an array "nums", we define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]), return the running sum of "nums"
//Input: nums = [1,2,3,4], Output: [1,3,6,10], Explanation: Running sum is obtained as follows -> [1, 1+2, 1+2+3, 1+2+3+4]
//Input: nums = [1,1,1,1,1], Output: [1,2,3,4,5], Explanation: Running sum is obtained as follows -> [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]
//Input: nums = [3,1,2,10,1], Output: [3,4,6,16,17]
//My Solution:
function runningSum($nums) {
    $runningResult = [];
    $sum = 0;
    for ($i = 0; $i < count($nums); $i++) {
        $sum = $sum + $nums[$i];
        $runningResult[] = $sum; 
    }
    return $runningResult;
}
//Pro Solution:
//1
function runningSum1($nums) {
    for ($i = 1; $i < count($nums); $i++) { //$i-nya langsung pakai 1, karena kita mau mengubah mulai dari index yg kedua yaitu nums[1]. Karena nums[0] nilainya tetap yg lama
        $nums[$i] += $nums[$i-1]; //langsung nums[i] (index yg sekarang), isinya diganti nilai yg sekarang ditambah value nums[i-1] (index yg sebelumnya)  
    }
    return $nums;
}
//2
function runningSum2($nums) {
    foreach ($nums as $index => $num) { //daripada pakai maka di sini bisa pakai foreach, konsepnya mirip yg atas, kita juga akan tambah dengan index sebelumya (pakai $i-1)
        $previousNum = $nums[$index - 1] ?? 0; //tapi masalahnya foreach akan selalu mulai dari index 0, jadi loop pertama akan kena index -1 ($i-1), jadi kita cek apakah index-nya ada? kalo gaada maka diisi 0 
        $nums[$index] = $previousNum + $num; //nah tinggal ganti nums[$i] yg sekarang dengan current value ($num) + nilai sebelumnya ($previousNum) juga hasil dari penjumlahan sebelumnya
    }
    return $nums;
}
//3
function runningSum3($nums) {
    foreach ($nums as $index => $num) { //sama seperti foreach yg atas konsepnya
        $nums[$index] = $index > 0 ? $num + $nums[$index-1] : $num; 
    } //tapi langsung saja (di atas) operator ternary dan aksi pengubahan $num[$index]-nya menjadi 1 line code
    return $nums;
}

//Task 3
//Richest Customer Wealth
//You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​ customer has in the j bank. Return the wealth that the richest customer has.
//A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
//Input: accounts = [[1,2,3],[3,2,1]], Output: 6
//Explanation: 1st customer has wealth = 1 + 2 + 3 = 6, 2nd customer has wealth = 3 + 2 + 1 = 6. Both customers are considered the richest with a wealth of 6 each, so return 6.
//Input: accounts = [[1,5],[7,3],[3,5]], Output: 10
//Explanation: 1st customer has wealth = 6, 2nd customer has wealth = 10, 3rd customer has wealth = 8. The 2nd customer is the richest with a wealth of 10.
//Input: accounts = [[2,8,7],[7,1,3],[1,9,5]], Output: 17
//My Solution:
function maximumWealth($accounts) {
    $wealth = [];
    foreach($accounts as $account) {
        $personWealth = 0;
        for ($i = 0; $i < count($account); $i++) {
            $personWealth += $account[$i];
        }
        $wealth[] = $personWealth;
    }
    $maximumWealth = max($wealth);
    return $maximumWealth; 
};
//Pro Solution:
//1
function maximumWealth1($accounts) {
    $maximumWealth = 0;
    for ($i = 0; $i < count($accounts); $i++) { 
        $personWealth = 0;
        for ($j = 0; $j < count($accounts[$i]); $j++) {
            $personWealth += $accounts[$i][$j];
        }   
        $maximumWealth = max($maximumWealth, $personWealth);    
    }
    return $maximumWealth;
} //this is the basic solution, only using for loop
//2
function maximumWealth2($accounts) {
    $maximumWealth = 0;
    foreach($accounts as $account) {
        $personWealth = array_sum($account);
        /*
        if ($personWealth > $maximumWealth) {
            $maximumWealth = $personWealth;
        } //bisa pakai cara if ini atau pakai built-in function max(), seperti di bawah
        */
        $maximumWealth = max($maximumWealth, $personWealth);
    }
    return $maximumWealth;
}
//3
function maximumWealth3($accounts) {
    return max(array_map('array_sum', $accounts));
} //just return a maximum value using max() from mapping result from array_map() for $accounts array with array_sum() as a callback 
//you must know that string name for built-in function can be a callback for the array_map() parameters for doing action based that built-in function
//4
function maximumWealth4($accounts) {
    return max(array_map(function($account) {
        $personWealth = 0;
        for ($i = 0; $i < count($account); $i++) {
            $personWealth += $account[$i];
        }
        return $personWealth;
    }, $accounts));
} //the concept is same with Pro Solution 3, but for the array_sum() callback part, we don't use built-in function (we use manual way instead)