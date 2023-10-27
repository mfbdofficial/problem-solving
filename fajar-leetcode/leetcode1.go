package main

//import "fmt"
//di atas ini bentuk kalo import hanya 1, di bawah ini kalo import lebih dari 1
import (
	"fmt" 
	"strconv"
)

func main() {
	//Task 2
	//Running Sum of 1d Array
	//Given an array "nums", we define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]), return the running sum of "nums"
	//Input: nums = [1,2,3,4], Output: [1,3,6,10], Explanation: Running sum is obtained as follows -> [1, 1+2, 1+2+3, 1+2+3+4]
	//Input: nums = [1,1,1,1,1], Output: [1,2,3,4,5], Explanation: Running sum is obtained as follows -> [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]
	//Input: nums = [3,1,2,10,1], Output: [3,4,6,16,17]
	//My Solution:
	func runningSum(nums []int) []int {
		var runningResult []int
		var sum int
		for i := 0; i < len(nums); i++ {
			sum = sum + nums[i]
			runningResult = append(runningResult, sum)
		}
		return runningResult
	}
	//Pro Solution:
	//1
	func runningSum2(nums []int) []int {
		runningResult := make([]int, len(nums) + 1) //buat array yg panjang-nya lebih dari 1 dari input-nya
		for i := 1; i < len(runningResult); i++ { //perulangan dengan nilai index (i) dimulai dari 1
			runningResult[i] = runningResult[i-1] + nums[i-1] //tiap isi index akan menjadi hasil penjumlahan sebelumnya dan nums (input) index sebelumnya
		} //jadi runningResult[1] = runningResult[0] + nums[0], runningResult[2] = runningResult[1] + nums[1], runningResult[3] = runningResult[2] + nums[2], dan seterusnya
		return runningResult[1:] //return sebagai array baru yg berasal dari array runningResult tapi hanya dipotong dan dimulai dari index 1, 
	} //karena index 0 value-nya 0 yg fungsinya untuk membantu di proses looping pertama saja
	//2
	func runningSum3(nums []int) []int {
		for i := 1; i < len(nums); i++ {
			nums[i] = nums[i] + nums[i-1]
		}
		return nums;
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
	func maximumWealth(accounts [][]int) int {
		var wealth []int
		for _, account := range accounts { //this is how to use foreach in Golang
			var personWealth int
			for _, row := range account {
				personWealth += row
			}
			wealth = append(wealth, personWealth)
		}
		maximumWealth := wealth[0];
		for _, value := range wealth { 
			if value > maximumWealth {
				maximumWealth = value
			}
		} //checking part to get the maximumWealth from all personWealths in welath array
		return maximumWealth
	}
	//Pro Solution:
	//1
	func maximumWealth1(accounts [][]int) int {
		maximumWealth := 0
		for _, account := range accounts {
			var personWealth int
			for _, row := range account {
				personWealth += row
			}
			if personWealth > maximumWealth {
				maximumWealth = personWealth
			} //checking part to get the maximumWealth from every personWealth
		}
		return maximumWealth
	}
	//2
	func maximumWealth2(accounts [][]int) int {
		maximumWealth := 0
		for i := 0; i < len(accounts); i++ {
			personWealth := 0 
			for j := 0; j < len(accounts[i]); j++ {
				personWealth += accounts[i][j]
			}
			if personWealth > maximumWealth {
				maximumWealth = personWealth
			}
		}
		return maximumWealth
	} //this is the basic solution, only using for loop

	//Task 4
	//Fizz Buzz
	//Given an integer n, return a string array answer (1-indexed) where:
	//answer[i] == "FizzBuzz" if i is divisible by 3 and 5, answer[i] == "Fizz" if i is divisible by 3, answer[i] == "Buzz" if i is divisible by 5, answer[i] == i (as a string) if none of that conditions before are true.
	//Input: n = 3, Output: ["1","2","Fizz"]
	//Input: n = 5, Output: ["1","2","Fizz","4","Buzz"]
	//Input: n = 15, Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
	//My Solution:
	func fizzBuzz(n int) []string {
		var fizzBuzzAnswer []string
		for i := 1; i <= n; i++ {
			valueInIndex := ""
			if i % 3 == 0 {
				valueInIndex = valueInIndex + "Fizz"
			}
			if i % 5 == 0 {
				valueInIndex = valueInIndex + "Buzz"
			}
			if i % 3 != 0 && i % 5 != 0 { //sebelumnya di bawah pakai string(i), tapi malah menghasilnya "\u0001", "\u0002", "\u0003" dan seterusnya
				valueInIndex = strconv.Itoa(i) //harus import "strconv" untuk memakai strconv.Itoa() untuk ubah i number menjadi string
			}
			fizzBuzzAnswer = append(fizzBuzzAnswer, valueInIndex)
		}
		return fizzBuzzAnswer
	}
	//Pro Solution:
	//1
	
}