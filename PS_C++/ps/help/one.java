import java.util.*;

interface OnePlusOne {
   public abstract void setPrice();
}
interface Discountable {
   public abstract void setPrice(int p);
}
class Icecream {
   int price = 1000;
   int bonusPoint;
   
   Icecream(int p) {
      this.price = p;
      if(price>1000) {
         this.bonusPoint = (price - 1000)/10;
      }
   }
   public String toString() {
      return "Others";
   }
}
class Jawsbar extends Icecream {
   public Jawsbar(int p) {
      super(1200);
   }
   @Override
   public String toString() {
      return "Jawsbar";
   }
}
class Merona extends Icecream {
   public Merona(int p) {
      super(1000);
   }
   @Override
   public String toString() {
      return "Merona";
   }
}
class Seoju extends Icecream {
   public Seoju(int p) {
      super(800);
   }
   @Override
   public String toString() {
      return "Seoju";
   }
}
class Tankboy extends Icecream implements Discountable {
   public Tankboy(int p) {
      super(1500);
   }
   @Override
   public String toString() {
      return "Tankboy";
   }
   public void setPrice(int p) {
      this.price = p;
   }
}
class Worldcone extends Icecream implements OnePlusOne {
   public Worldcone(int p) {
      super(2000);
   }
   @Override
   public String toString() {
      return "Worldcone";
   }
   public void setPrice() {
      this.price = price/2;
   }
}

class Buyer {
   int money = 10000;
   int bonusPoint = 0;
   Vector v = new Vector();
   void buy(Icecream icecream) {
      if(icecream.toString().equals("Tankboy")) {
         if(icecream.price >= bonusPoint){
            icecream.price -= bonusPoint;
         }else{
            bonusPoint -= icecream.price;
            icecream.price = 0;
         }
         ((Discountable)icecream).setPrice(icecream.price);
      }else if(icecream.toString().equals("Worldcone")){
         ((OnePlusOne)icecream).setPrice();
      }else{
         bonusPoint+=icecream.bonusPoint;
      }
      System.out.println(icecream.price + " " + icecream.toString() + " " + money);

      if(money<icecream.price) {
         System.out.println("Not enough to buy: "+ icecream);
      } else {
         money-=icecream.price;
         v.add(icecream);
      }
   }
   void summary() {
      int totalPrice = 0;
      for(int i = 0; i < v.size(); i++) {
         Icecream i1 = (Icecream)v.get(i);
         totalPrice += i1.price;
      }
      System.out.println("Total price: " + totalPrice);
      System.out.println("Balance: " + money);
      System.out.println("Bonus point: " + bonusPoint);
      System.out.print("Total item: ");
      for (int i = 0; i<v.size(); i++) {
         if(i==v.size()-1) {
            System.out.print(v.get(i) + "(" + ((Icecream)v.get(i)).price + ")");
         }
         else {
            System.out.print(v.get(i) + "(" + ((Icecream)v.get(i)).price + "), ");
         }
      }
   }
}
public class one {

   public static void main(String[] args) {
      // TODO Auto-generated method stub
      Scanner scanner = new Scanner(System.in);
      String[] line = scanner.nextLine().split(" ");
      
      Buyer b1 = new Buyer();
      
      for(int i = 0; i < line.length; i++) {
            if(line[i].equals("J")) {
                b1.buy(new Jawsbar(1200));
            } else if(line[i].equals("M")) {
                b1.buy(new Merona(1000));
            } else if(line[i].equals("S")) {
                b1.buy(new Seoju(800));
            } else if(line[i].equals("T")) {
                b1.buy(new Tankboy(1500));
            } else if(line[i].equals("W")) {
                b1.buy(new Worldcone(2000));
            } else {
                b1.buy(new Icecream(1000));
            }
        }
      b1.summary();
   }
}