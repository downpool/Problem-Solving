/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let unlocked = Array(rooms.length).fill(false);
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