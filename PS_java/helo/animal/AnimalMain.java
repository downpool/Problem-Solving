import java.util.*;

abstract class Animal {
    String name;
    int legs;
    boolean gills, wings, horns;

    Animal(String n, int l, boolean g, boolean w, boolean h){}

    void itls(){
        System.out.println(this.name + " is a " + this.getClass().getSimpleName());
    }
    
    void itHas(){
        if(this.gills || this.wings || this.horns){
            if (this.gills && !this.wings && !this.horns){
                System.out.println("It has " + this.legs + " legs and gills.");
            }else if(this.wings && !this.gills && !this.horns){
                System.out.println("It has " + this.legs + " legs and wings.");
            }else if(this.horns && !this.gills && !this.wings){
                System.out.println("It has " + this.legs + " legs and horns.");
            }else{
                System.out.println("There is no such animal");
            }
        }
    }

    void itSpeaks(){}

    void describes(){
        this.itls();
        this.itHas();
        this.itSpeaks();
    }
}

class Fish extends Animal {
    String name;
    Fish (String n){
        super(n, 0, true, false, false);
    }
    void itls(){
        System.out.println(this.name + " is a " + this.getClass().getSimpleName());
    }
    
    void itHas(){
        if(this.gills || this.wings || this.horns){
            if (this.gills && !this.wings && !this.horns){
                System.out.println("It has " + this.legs + " legs and gills.");
            }else if(this.wings && !this.gills && !this.horns){
                System.out.println("It has " + this.legs + " legs and wings.");
            }else if(this.horns && !this.gills && !this.wings){
                System.out.println("It has " + this.legs + " legs and horns.");
            }else{
                System.out.println("There is no such animal");
            }
        }else{
            System.out.println("It has " + this.legs + " legs.");
        }
    }

    void itSpeaks(){
        System.out.println("It speaks BLUB.");
    }

    void describes(){
        this.itls();
        this.itHas();
        this.itSpeaks();
    }
   
}

class Snake extends Animal {
    String name;
    Snake (String n){
        super(n, 0, false, false, false);
    }
    void itls(){
        System.out.println(this.name + " is a " + this.getClass().getSimpleName());
    }
    
    void itHas(){
        if(this.gills || this.wings || this.horns){
            if (this.gills && !this.wings && !this.horns){
                System.out.println("It has " + this.legs + " legs and gills.");
            }else if(this.wings && !this.gills && !this.horns){
                System.out.println("It has " + this.legs + " legs and wings.");
            }else if(this.horns && !this.gills && !this.wings){
                System.out.println("It has " + this.legs + " legs and horns.");
            }else{
                System.out.println("There is no such animal");
            }
        }
    }

    void itSpeaks(){
        System.out.println("It speaks HISS.");
    }

    void describes(){
        this.itls();
        this.itHas();
        this.itSpeaks();
    }

}

class Chicken extends Animal {
    Animal name;
    Chicken (String n){
        super(n, 2, false, true, false);
    }
    void itls(){
        System.out.println(this.name + " is a " + this.getClass().getSimpleName());
    }
    
    void itHas(){
        if(this.gills || this.wings || this.horns){
            if (this.gills && !this.wings && !this.horns){
                System.out.println("It has " + this.legs + " legs and gills.");
            }else if(this.wings && !this.gills && !this.horns){
                System.out.println("It has " + this.legs + " legs and wings.");
            }else if(this.horns && !this.gills && !this.wings){
                System.out.println("It has " + this.legs + " legs and horns.");
            }else{
                System.out.println("There is no such animal");
            }
        }
    }

    void itSpeaks(){
        System.out.println("It speaks COCK.");
    }

    void describes(){
        this.itls();
        this.itHas();
        this.itSpeaks();
    }
    
}

class Human extends Animal {
    String name;
    Human (String n){
        super(n, 2, false, false, false);
    }
    void itls(){
        System.out.println(this.name + " is a " + this.getClass().getSimpleName());
    }
    
    void itHas(){
        if(this.gills || this.wings || this.horns){
            if (this.gills && !this.wings && !this.horns){
                System.out.println("It has " + this.legs + " legs and gills.");
            }else if(this.wings && !this.gills && !this.horns){
                System.out.println("It has " + this.legs + " legs and wings.");
            }else if(this.horns && !this.gills && !this.wings){
                System.out.println("It has " + this.legs + " legs and horns.");
            }else{
                System.out.println("There is no such animal");
            }
        }
    }

    void itSpeaks(){
        System.out.println("It speaks HELLO.");
    }

    void describes(){
        this.itls();
        this.itHas();
        this.itSpeaks();
    }
    
}

class Cow extends Animal {
    String name;
    Cow (String n){
        super(n, 4, false, false, true);
    }
    void itls(){
        System.out.println(this.name + " is a " + this.getClass().getSimpleName());
    }
    
    void itHas(){
        if(this.gills || this.wings || this.horns){
            if (this.gills && !this.wings && !this.horns){
                System.out.println("It has " + this.legs + " legs and gills.");
            }else if(this.wings && !this.gills && !this.horns){
                System.out.println("It has " + this.legs + " legs and wings.");
            }else if(this.horns && !this.gills && !this.wings){
                System.out.println("It has " + this.legs + " legs and horns.");
            }else{
                System.out.println("There is no such animal");
            }
        }
    }

    void itSpeaks(){
        System.out.println("It speaks MOO.");
    }

    void describes(){
        this.itls();
        this.itHas();
        this.itSpeaks();
    }
    
}

class Pig extends Animal {
    String name;
    Pig (String n){
        super(n, 4, false, false, false);
    }
    void itls(){
        System.out.println(this.name + " is a " + this.getClass().getSimpleName());
    }
    
    void itHas(){
        if(this.gills || this.wings || this.horns){
            if (this.gills && !this.wings && !this.horns){
                System.out.println("It has " + this.legs + " legs and gills.");
            }else if(this.wings && !this.gills && !this.horns){
                System.out.println("It has " + this.legs + " legs and wings.");
            }else if(this.horns && !this.gills && !this.wings){
                System.out.println("It has " + this.legs + " legs and horns.");
            }else{
                System.out.println("There is no such animal");
            }
        }
    }

    void itSpeaks(){
        System.out.println("It speaks OINK.");
    }

    void describes(){
        this.itls();
        this.itHas();
        this.itSpeaks();
    }
    
}

public class AnimalMain {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] sc = scan.nextLine().split(" ");
        if(sc[1].equals("0") && sc[2].equals("true") && sc[3].equals("false") && sc[4].equals("false")){
            Fish f = new Fish(sc[0]);
            f.describes();
        }else if(sc[1].equals("0") && sc[2].equals("false") && sc[3].equals("false") && sc[4].equals("false")){
            Snake s = new Snake(sc[0]);
            s.describes();
        }else if(sc[1].equals("2") && sc[2].equals("false") && sc[3].equals("true") && sc[4].equals("false")){
            Chicken c = new Chicken(sc[0]);
            c.describes();
        }else if(sc[1].equals("2") && sc[2].equals("false") && sc[3].equals("false") && sc[4].equals("false")){
            Human h = new Human(sc[0]);
            h.describes();
        }else if(sc[1].equals("4") && sc[2].equals("false") && sc[3].equals("false") && sc[4].equals("true")){
            Cow c = new Cow(sc[0]);
            c.describes();
        }else if(sc[1].equals("4") && sc[2].equals("false") && sc[3].equals("false") && sc[4].equals("false")){
            Pig p = new Pig(sc[0]);
            p.describes();
        }else{
            System.out.println("There is no such animal.");
        }
    }
}
