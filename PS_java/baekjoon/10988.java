import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] str = scan.next().split("");
        int ispalind = 1;
        for(int i = 0; i < str.length; i++){
            if(!str[i].equals(str[str.length - i - 1])){
                ispalind = 0;
                break;
            }
        }
        System.out.println(ispalind);
    }
}
