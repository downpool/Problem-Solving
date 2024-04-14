let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let MAX = 100111;
let a = Array(MAX);
let p = Array.from(Array(MAX));
let tin = Array(MAX);
let tout = Array(MAX);
let timer, l;