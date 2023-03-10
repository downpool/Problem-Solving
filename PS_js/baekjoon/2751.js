// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// input.shift();
// const result = quickSortStarter(input).join('\n');

// function quickSortStarter(arr) {
//   if (!arr.length) {
//     return arr;
//   }
//   for(let i = 0; i < arr.length; i++){
//     arr[i] = Number(arr[i]);
//   }
//   return quickSort(arr, 0, arr.length - 1);
// }

// function quickSort(array, l, r) {
//   const pivot = array[Math.floor((l + r) / 2)];
//   let left = l;
//   let right = r;

//   while (left <= right) {
//     while (array[left] < pivot) left++;
//     while (array[right] > pivot) right--;

//     if (left <= right) {
//       const temp = array[left];
//       array[left] = array[right];
//       array[right] = temp;
//       left++;
//       right--;
//     }
//   }

//   if (l < right) quickSort(array, l, right);
//   if (r > left) quickSort(array, left, r);

//   return array;
// }

// console.log(result);
let input = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [N, ...numList] = input.map((e) => Number(e));
    const result = numList.sort((a, b) => a - b);
    console.log(result.join('\n'));
  });