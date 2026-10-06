import java.util.*;

public class Main {
 public static void main(String[] args) {
 Scanner sc = new Scanner(System.in);
 int n = sc.nextInt();
 int[][] a = new int[n][n];
 for (int i = 0; i < n; i++) {
 for (int j = 0; j < n; j++) {
 a[i][j] = sc.nextInt();
 }
 }
 boolean ok = true;
 for (int i = 1; i < n; i++) {
 for (int j = 0; j < i; j++) {
 if (a[i][j] != 0) {
 ok = false;
 }
 }
 }
 if (ok) {
 System.out.println("Upper triangular matrix");
 } else {
 System.out.println("Not an Upper triangular matrix");
 }
 }
}
