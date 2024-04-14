import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        for(int i = 0; i < n; i++){
            for(int j = 1; j < n-i; j++)
                System.out.print(" ");
            System.out.print("*");
            if(i != 0){
                for(int j = 0; j < 2*i-1; j++)
                    System.out.print(" ");
                System.out.print("*");
            }
            if(i != n-1)
                System.out.println("");
        }
    }
}
