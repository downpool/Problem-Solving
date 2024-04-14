import java.util.*;

public class two {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] note = scan.nextLine().split(" ");
        System.out.println(note.length - 1);
        for (String i : note) {
            System.out.println(i);
        }
    }
}
