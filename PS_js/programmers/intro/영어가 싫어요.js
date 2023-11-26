function solution(numbers) {
    let nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i of nums){
        numbers = numbers.replaceAll(i, nums.indexOf(i));
    }
    return Number(numbers);
}