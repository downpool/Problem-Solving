// function solution(n, lighthouse) {
//     let light = Array.from(Array(n + 1), () => Array());

//     for (let i of lighthouse) {
//         let [a, b] = i;
//         light[a].push(b);
//         light[b].push(a);
//         light[a].sort((a, b) => {
//             return a - b
//         });
//         light[b].sort((a, b) => {
//             return a - b
//         });
//     }
//     let answer = n;
//     let sortedLight = light.sort((a, b) => {
//         return b.length - a.length;
//     })
//     for (let i = 1; i <= n; i++) {
//         let lightOn = Array(n + 1).fill(false);
//         lightOn[0] = true;
//         check(sortedLight, i, lightOn);
//     }

//     function check(houseList, t, lightup) {
//         let count = 0;
//         while (queue.length) {
//             let node = queue.shift();
//             lightup[node] = true;
//             sortedLight[node].forEach(e => {
//                 lightup[e] = true;
//             });
//         }
//     }

//     return answer;
// }

//dp + 트리...?
function solution(n, lighthouse) {
    let answer = 0;

    
    return answer;
}

//스패닝 트리
//no3
// function solution(n, lighthouse) {
//     var answer = 0;
//     return answer;
// }