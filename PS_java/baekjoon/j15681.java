import java.io.*;
import java.util.*;

public class j15681 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int r = Integer.parseInt(st.nextToken());
        int q = Integer.parseInt(st.nextToken());
        Graph g = new Graph(n);
        for (int i = 0; i < n - 1; i++) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            g.addEdge(u, v);
        }

        // g.dfs(r);
        // g.dp(r);
        g.dp2(r);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < q; i++) {
            int k = Integer.parseInt(br.readLine());
            sb.append(g.cache[k]).append("\n");
        }
        System.out.println(sb);
    }
}

class Graph {
    int[] cache;
    LinkedList<Integer>[] adj;
    LinkedList<Integer>[] child;
    int n;
    boolean[] visit;

    public Graph(int n) {
        child = new LinkedList[n + 1];
        for (int i = 0; i < n + 1; i++) {
            child[i] = new LinkedList<>();
        }
        adj = new LinkedList[n + 1];
        for (int i = 0; i < n + 1; i++) {
            adj[i] = new LinkedList<>();
        }
        this.n = n;
        visit = new boolean[n + 1];
        cache = new int[n + 1];
    }

    public void addEdge(int u, int v) {
        adj[u].add(v);
        adj[v].add(u);
    }

    public void dfs(int R) {
        visit[R] = true;
        for (int i : adj[R]) {
            if (visit[i])
                continue;
            // if(!visit[i]){
            child[R].add(i);
            visit[i] = true;
            dfs(i);
            // }
        }
    }

    public int dp(int R) {
        if (cache[R] != 0)
            return cache[R];
        int sum = 0;
        for (int child : child[R]) {
            // System.out.println(child);
            sum += dp(child);
        }
        return cache[R] = sum + 1;
    }

    public int dp2(int R) {
        cache[R] = 1;

        for (int i : adj[R]) {
            if (cache[i] == 0) {
                cache[R] += dp2(i);
            }
        }
        return cache[R];
    }
}