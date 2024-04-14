import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] arr = scan.nextLine().split(" ");
        int[] ar = new int[arr.length + 1];
        for(int i = 0; i < arr.length; i++){
            ar[i] = Integer.parseInt(arr[i]);
        }
        int[] ans = new int[51];
        for(int i = 0; i < ans.length; i++){
            ans[i] = -1;
        }
        for(int i : ar){
        }
   }
}
