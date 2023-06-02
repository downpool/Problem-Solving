import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        // 입력:
        Scanner sc = new Scanner(System.in);
        int[] coins = new int[] { 1, 4, 5, 9 };

        int[] dp = new int[22];

        // dp[i] : i원을 거슬러주기 위해 필요한 최소 동전 수
        for (int i = 1; i < 22; i++) {
            int minVal = i;
            for (int coin : coins) {
                if (i - coin >= 0) {
                    minVal = Math.min(minVal, dp[i - coin]);
                }
            }
            dp[i] = minVal + 1;
        }

        for (int i = 1; i < 22; i++)
            System.out.print(dp[i] + " ");
        // System.out.println(dp[7]);
    }
}
