//Task 1
//Invert Binary Tree
//Given "root" variable of binary tree. Invert the tree & return it's route
//Input: root = [4,2,7,1,3,6,9], Output: root = [4,7,2,9,6,3,1]
//Input: root = [2,1,3], Output: root = [2,3,1]
//Input: root = [], Output: root = []
//Pro Solution:
//1
var invertTree1 = function(root) {
    //cek apakah nilai root sudah null?
    if(root == null){
        return root //kalo iya maka return root (agar tidak menjalankan swapping process dan recursive function lagi)
    }
    //swapping process
    const curr = root.left //curr hanya sebagai variable penukar untuk menyimpan nilai 
    root.left = root.right
    root.right = curr 
    //call the function recursively for the left subtree
    invertTree1(root.left)
    //call the function recursively for the right subtree
    invertTree1(root.right)
    return root
}; //kelemahan cara ini yaitu yg dicek adalah nilai root, kalo nilai root ada maka langsung true,
//hasil true itu akan menjalankan swapping process dan recursive function lagi meski bisa jadi children dari root itu tidak ada,
//jadi function akan menjalankan 1 swapping process dan recursive function tambahan yg sia - sia
//2
var invertTree2 = function(root) {
    //cek apakah nilai children left & children right, dari root ada?
    if(!root?.left && !root?.right) return root; 
    //swapping process
    const curr = root.left //curr hanya sebagai variable penukar untuk menyimpan nilai 
    root.left = root.right
    root.right = curr 
    //call the function recursively for the left subtree
    invertTree2(root.left)
    //call the function recursively for the right subtree
    invertTree2(root.right)
    return root
}; //lebih bagus karena yg dicek adalah children-nya, kalo children tidak ada maka langsung return root 
//jadi performa lebih cepat, tidak usah jalankan 1 swapping process dan recursive function tambahan yg sia - sia
//NOTE : Pro Solution 1 dan Pro Solution 2 meletakkan swapping process lebih dulu dari call recursive function,
//jika ditelusuri maka proses di binary tree-nya dia akan lakukan swapping dari atas sampai ke sisi kiri paling bawah
//laju swap-nya memiliki pola atas -> kiri bawah -> kanan bawah
//3
var invertTree3 = function(root) {
    //cek apakah nilai root sudah null?
    if(root == null){
        return root //kalo iya maka return root (agar tidak menjalankan swapping process dan recursive function lagi)
    }   
    //call the function recursively for the left subtree
    invertTree3(root.left)
    //call the function recursively for the right subtree
    invertTree3(root.right)
    //swapping process
    const curr = root.left //curr hanya sebagai variable penukar untuk menyimpan nilai 
    root.left = root.right
    root.right = curr 
    return root
}; //konsep mirip Pro Solution 1, tapi ditukar (swapping process ada di bawah recursive function)
//kekurangannya mirip, tapi dia cuma jalankan 1 recursive function tambahan (swapping process tambahan sia - sia-nya berhasil dihindari)
//4
var invertTree4 = function(root) {
    //cek apakah nilai children left & children right, dari root ada?
    if(!root?.left && !root?.right) return root; 
    //call the function recursively for the left subtree
    invertTree4(root.left)
    //call the function recursively for the right subtree
    invertTree4(root.right)
    //swapping process
    const curr = root.left //curr hanya sebagai variable penukar untuk menyimpan nilai 
    root.left = root.right
    root.right = curr 
    return root
}; //konsep mirip Pro Solution 2, tapi ditukar (swapping process ada di bawah recursive function), performa juga cepat
//NOTE : Pro Solution 3 dan Pro Solution 4 meletakkan call recursive function lebih dulu dari swapping process,
//jika ditelusuri maka proses di binary tree-nya dia akan menuju ke sisi kiri paling bawah (tanpa swapping) lalu barulah melakukan 
//swapping dengan laju swap-nya pola kiri bawah -> kanan bawah -> atas

//Task 2
//Running Sum of 1d Array
//Given an array "nums", we define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]), return the running sum of "nums"
//Input: nums = [1,2,3,4], Output: [1,3,6,10], Explanation: Running sum is obtained as follows -> [1, 1+2, 1+2+3, 1+2+3+4]
//Input: nums = [1,1,1,1,1], Output: [1,2,3,4,5], Explanation: Running sum is obtained as follows -> [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]
//Input: nums = [3,1,2,10,1], Output: [3,4,6,16,17]
//My Solution:
var runningSum = function(nums) {
    let runningResult = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        runningResult.push(sum);
    }
    return runningResult;
};
//Pro Solution:
//1
const runningSum1 = nums => {
    let sum = 0;
    return nums.map(num => sum += num); //array-nya di-mapping-kan, isi tiap index map-nya,
}; //diubah atau diisi dengan sum (dari hasil sum + num), sangat simple
//2
var runningSum2 = function(nums) {
    nums.reduce((acc, curr, i, arr) => arr[i] = curr + acc); //reduce menjalankan callback() yg kita buat untuk setiap isi element array-nya
    return nums; //return-nya reduce di atas adalah single value (tapi dalam kasus ini kita cuma fokus untuk melakukan aksi push nilai array baru ke nums) 
}; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//3
var runningSum3 = function(nums) {
    nums.reduce((acc, curr, i, arr) => arr[i] += acc); //curr (current value) diganti arr[i], sama saja
    return nums; //jadi bisa dipersingkat pakai penulisan "+=" karena bentuknya "arr[i] = arr[i] + acc"
};

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
var maximumWealth = function(accounts) {
    let wealth = [];
    accounts.forEach(function (account) { //perulangan forEach untuk tiap customer (dimensi ke 1), pakai perulangan for juga bisa
        let personWealth = 0
        for (let i = 0; i < account.length; i++) { //lakukan perulangan untuk bank account (dimensi ke 2)
            personWealth += account[i]; //di dalamnya mejalankan penjumlahan
        }
        wealth.push(personWealth); //setelah dijumlahkan maka masukkan ke array baru
    });
    let maximumWealth = Math.max(...wealth); //ambil nilai maximum dari array baru
    return maximumWealth; //return nilai maximum
};
//Pro Solution:
//1
var maximumWealth1 = function(accounts) {
    let maxWealth = 0; //initialize maxWealth as 0
    accounts.forEach(account => { //forEach loop for every customer (account means every customer account)
        maxWealth = Math.max(account.reduce((wealth, moneyAmountInABank) => wealth += moneyAmountInABank), maxWealth); //First, doing reduce to get wealth for current customer. The compare it with the current maxWealth value to get the bigger (maximum) one
    }); //so current maxWealth would be compared with every customer wealth and may be change everytime the forEach doing loop for every customer
    return maxWealth;
};
//2
var maximumWealth2 = function(accounts) {
    let maxWealth = 0;
    accounts.forEach(v => {maxWealth = Math.max(v.reduce((a, c) => a += c), maxWealth)});
    return maxWealth;
}; //the concept is same like Pro Solution 1, but do the loop in oneline and using simple name for the variables. Good, but not recommended (hard to read).
//3
var maximumWealth3 = function(accounts) {
    let maximumWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let personWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            personWealth += accounts[i][j];
        }
        maximumWealth = Math.max(maximumWealth, personWealth);
    }
    return maximumWealth;
}; //this is the basic solution, only using for loop