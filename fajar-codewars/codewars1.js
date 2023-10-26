//Task 1
//Sum all the numbers of a given array ( cq. list ), 
//except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, 
//even if there are more than one with the same value.
//Input: [6, 2, 1, 8, 10], Output: 16
//Input: [1, 1, 11, 2, 3], Output: 6
//If an empty value (null, None, Nothing etc.) is given instead of an array, 
//or the given array is an empty list or a list with only 1 element, return 0.
//My solution :
function sumArray(array) {
    if (array === undefined || array === null || array === '') {
        return 0; //cek parameternya jangan undefined atau null atau kosong
    }
    /*
    if (!Array.isArray(array)) {
        return 0;
    } //bisa juga cara ini untuk ganti yang atas
    */
    if (!array.every((element) => typeof element === 'number')) {
        return 0; //cek untuk setiap isi element array-nya harus bertipe data number
    }
    if (array.length < 2) {
        return 0; //kalo panjang array-nya kurang dari 2 juga return 0
    }
    let minValue = Math.min(...array); //temukan nilai minimum di array
    let maxValue = Math.max(...array); //temukan nilai maximum di array
    const indexMin = array.indexOf(minValue); //cari index array untuk value minimum (hanya kembalikan 1 index, yg pertama ditemui dari index 0)
    if (indexMin > -1) { //cek jika ada index-nya ketemu untuk nilai minimum
        array.splice(indexMin, 1); //lalu array dipotong sejauh 1 element dari indexMin
    }
    const indexMax = array.indexOf(maxValue); //cari index array untuk value maximum (hanya kembalikan 1 index, yg pertama ditemui dari index 0)
    if (indexMax > -1) { //cek jika ada index-nya ketemu untuk nilai maximum
        array.splice(indexMax, 1); //lalu array dipotong sejauh 1 element dari indexMax
    }
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //reduce punya 2 parameter (function callback untuk operasi yg mau dilakukan, nilai awal akumulator)
}
//Pro solution :
//1
function sumArray(array) {
    if (array == null) { //cek untuk nilai null
        return 0;
    } else if (array.length < 2) { //cek kalo length dibawah 2
        return 0;
    } else {
        array = array.sort(function(a,b) {return a - b;}); //dia sort array-nya dari yg terkecil
        //lalu melakukan pertambahan dengan perulangan for yang mulai dari index 1 dan diakhiri dari length terakhir dikurang 1
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
} //mungkin kelemahan cara ini, hasil akan salah kalo misal nilai minimum atau maximum yang double lebih dari 2 (karena cuma hapus element awal dan terakhir saja setelah sort)
//2
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0 
//langsug bikin function, dan lakukan operator ternary, array di-sort, lalu dipotong dengan slice(1, -1) artinya menginclude element dari index 1 sampe seterusnya kecuali yang element terakhir
//lalu dijumlahkan dengan memanfaatkan function reduce(), ini lebih cepat tapi mungkin kelemahannya juga sama (hasil salah kalo ada nilai minimum atau maximum yang double lebih dari 2)
//NOTE : Kalo splice() itu modify dan nambahkan element baru (ditaruh di parameter ketiga) misal splice(1, 2, 'fajar', 'joko'). Sementara slice itu murni hanya untuk motong porsi dari element array

//Task 2
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1 sequared = 1, 2 sequared = 2, 2 sequared = 2. So 1 + 4 + 4 = 9
//My solution :
function squareSum(numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator + (currentValue ** 2), 0);
} //konsepnya langsung pakai reduce() untuk hitung nilai akumulasi setiap element isi array-nya dipangkatkan 2 dahulum lalu barulah nilainya ditambahkan ke akumulasi
//Pro solution :
//1
function squareSum(numbers){
    return numbers.reduce(function(sum, num) {
        sum + (num * num)
    }, 0);
} //konsepnya sebenarnya sama, cuma penulisan function aja yg beda, kalo sebelumnya pake arrow function, terus kalo yg ini itu bukan perpangkatan 2, tapi element dikali nilai element itu sendiri
//kekurangannya mungkin sama saja seperti pangkat 2 (karena element dikali element itu sendiri), tapi akan susah jika disuruh membuat penjumlahan pangkat 3
//2
const squareSum2 = numbers => numbers.reduce((a, b)=> a + b**2, 0); //sama seperti solusi saya, tapi penulisan function memakai cara penulisan arrow function
