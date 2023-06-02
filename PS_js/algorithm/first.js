//BFS
/*
Adjacency List
?(n)
make queue q and push n

PRINT n

WHILE q's length is not zero:
    new value node is q.front
    q pop front
    q.shift()

    FOR e in graph[node]:
        IF e is not visited:
            PRINT e
            q push e
            visited[e] change true

*/

/*
Adjacency Matrix



*/


//DFS
/*
Adjacency List


*/

/*
Adjacency Matrix

*/


function BFS(graph, n, visited) {
    let queue = [n];
    console.log(n);

    while(queue.length){
        let node = queue.shift();

        
    }
}


function DFS(graph, n, visited) {

}