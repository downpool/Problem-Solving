import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int year = scan.nextInt();
        int yoon = 0;
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            yoon = 1;
        }
        System.out.println(yoon);
    }
}
