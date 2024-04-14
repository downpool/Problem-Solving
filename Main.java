import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        // 입력:
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();

        int sum = 0;
        for(int i = a; i <= b; i++){
            int count = 0;
            for(int j = 1; j <= c; j++){
                if(i % j == 0) {
                    count++;
                }
            }
            if (count == 2){
                sum += i;
            }
        }
        System.out.println(sum);
    }
}
