import java.util.*;
class Node{
    int data;
    Node next;
    Node (int data){
        this.data = data;
        this.next = next;

    }
}
class Singlyll{
    Node head;
    Singlyll(){
        this.head = null;
    }
    void addf(int data){
        Node newNode[] = new Node(data);
        if(head == null){
            head = newNode;
        }else{
            newNode.next = head;
            head = newNode;
        }
    }
void addl(int data){
    Node newNode = new Node(data);
    if(head == null){
        head = newNode;

    }
    else{
        Node current = head;
        while(current.next != null){
            current = current.next;

        }
        current.next= newNode;
    }
}
}
class Rtlinst{
    public static void main(String args []){
        Singlyll  l = new Singlyll();
        Scanner s = new Scanner(System.in);
        while(true){
            System.out.println("1 add first");
            System.out.print("2 add last");
            int choice = s .nextInt();
            switch(choice){
                case 1 :
                System.out.println(" enter the element first ");
                int addf = s.nextInt();
                list.addf(addf);
                break;
                case 2 :
                System.out.println(" enter the elemet last ");
                int addl = s.nextInt();
                list.addl(addl);
                break;
                default
                System.out.println("invalid choice ");

            }
        }
    }
}