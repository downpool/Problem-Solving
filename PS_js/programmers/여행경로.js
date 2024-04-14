// function solution(tickets) {
//     let answer = [];

//     function bfs(v) {
//         let queue = [v];
//         visited[v] = true;

//         while (!queue.length) {
//             let node = queue.shift();
//             tickets[node].forEach(e => {
//                 if(!visited[e]){
//                     queue.push(e);
//                     visited[e] = true;
//                 }
//             })
//         }
//     }
//     let country = {};
//     for (let i of tickets) {
//         if (country[i[0]] == null || country[i[0] == undefined]) {
//             country[i[0]] = [i[1]];
//         } else {
//             country[i[0]].push(i[1]);
//             country[i[0]].sort();
//         }
//     }
//     let visited = Array(country.keys());
//     console.log(visited);
//     return answer;
// }

//no2
// function solution(tickets) {
//     var answer = [];
//     let graph = {};
//     let sets = [];
//     for(let i of tickets){ 
//         sets.push(i[0]);
//     }
//     let country = new Set([...sets]);
//     for(let i of country){
//         graph[i] = [];
//     }
//     for(let i of tickets){
//         graph[i[0]].push(i[1]);
//         graph[i[0]].sort();
//     }
//     function bfs(v){
//         let queue = [v];
//         console.log(v);
//         while(tickets.length){
//             let node = queue.shift();
//             graph[node].forEach(n => {
//                 for(let i = 0; i < tickets.length; i++){
//                     if(tickets[i][0] == node && tickets[i][1] == n){
//                         console.log(n);
//                         tickets.splice(i, 1);
//                         break;
//                     }
//                 }
//                 queue.push(n);
//             })
//         }
//     }
    
//     function dfs(v, t){
//         console.log(v);
        
//         graph[v].forEach(n => {
//             for(let i = 0; i < t.length; i++){
//                 if(t[i][0] == v && t[i][1] == n){
//                     t.splice(i, 1);
//                     dfs(n, t);
//                 }
//             }
//         })
//     }
//     console.log(graph);
//     // bfs("ICN");
//     // dfs("ICN", tickets);
//     console.log(tickets);
//     return answer;
// }

//no3

function solution(tickets) {
    let answer = [];

    function dfs()

    return answer;
}