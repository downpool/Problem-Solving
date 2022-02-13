let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let check = Array(200001).fill(false);
let dist = Array(200001);
let N = Number(input[0]);
let M = Number(input[1]);
check[N] = true;
dist[N] = 0;
let q = [];
q.push(N);
while (q.length) {
    let now = q.shift();
    if (now - 1 >= 0) {
        if (check[now - 1] == false) {
            q.push(now - 1);
            check[now - 1] = true;
            dist[now - 1] = dist[now] + 1;
        }
    }
    if (now + 1 < 200001) {
        if (check[now + 1] == false) {
            q.push(now + 1);
            check[now + 1] = true;
            dist[now + 1] = dist[now] + 1;
        }
    }
    if (now * 2 < 200001) {
        if (check[now * 2] == false) {
            q.push(now * 2);
            check[now * 2] = true;
            dist[now * 2] = dist[now] + 1;
        }
    }
}
console.log(dist[M]);