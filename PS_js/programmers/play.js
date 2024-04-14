let country = [];
let ks = [
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"]
];

for (let i of ks) {
    if (country[i[0]] == null || country[i[0] == undefined]) {
        country[i[0]] = [i[1]];
    } else {
        country[i[0]].push(i[1]);
        country[i[0]].sort();
    }
}
let visited = [];
console.log(visited);
console.log(country);