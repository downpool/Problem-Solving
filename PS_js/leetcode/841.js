/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let unlocked = Array(rooms.length).fill(false);
    //START point
    unlocked[0] = true;
    bfs(0);


    if (unlocked.includes(false)) return false;
    else return true;
    function bfs(v) {
        let queue = [v];
        unlocked[v] = true;

        while (queue.length) {
            let node = queue.shift();
            rooms[node].forEach(e => {
                if (!unlocked[e]) {
                    queue.push(e);
                    unlocked[e] = true;
                }
            });
        }
    }
};

/*

1. this is a very simple problem using BFS, I hope you don't run away when you see the difficulty level of MEDIUM :)

2. simple problem definition: 
index is from 0 to n-1, linked list method, run once and exit.

3. function bfs(v) looks like a basic bfs function. 
(1) The key point is that the starting point is 0, and (2) it returns true if you can visit all the rooms you've turned bfs(0), or false.

4. I don't think there was anything difficult about solving this problem.


1. 이 문제는 bfs 를 이용한 매우 단순한 문제입니다. medium이라는 난이도를 보고 도망치는 일이 없길 바랍니다:)

2. 간단한 문제 정의: 
index 는 0 부터 n-1까지, 연결 리스트방식, 1회전 후 종료

3. function bfs(v)는 기본적인 bfs 함수처럼 생김. 
(1) 핵심점은 시작점이 0이라는것과 (2) bfs(0) 을 돌린 모든 방을 방문할 수 있으면 true, 아니면 false return.

4. 이 문제를 해결하면서 어려웠던 점은 딱히 존재 하지 않았던것 같습니다.


*/