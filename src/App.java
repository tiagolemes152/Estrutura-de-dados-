import java.util.Scanner;
import java.time.LocalDate;

public class App {

    static Scanner leia = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.print("Tamanho inicial da pilha: ");
        int tamanho = leia.nextInt();

        PilhaRecorde pilha = new PilhaRecorde(tamanho);

        int opcao;

        do {

            System.out.println("\n1 - Inserir recorde");
            System.out.println("2 - Ver recorde atual");
            System.out.println("3 - Remover recorde");
            System.out.println("4 - Listar recordes");
            System.out.println("0 - Sair");

            opcao = leia.nextInt();
            leia.nextLine();

            switch (opcao) {

                case 1:

                    System.out.print("Nome do atleta: ");
                    String nome = leia.nextLine();

                    System.out.print("Tempo: ");
                    double tempo = leia.nextDouble();

                    System.out.print("Ano: ");
                    int ano = leia.nextInt();

                    System.out.print("Mes: ");
                    int mes = leia.nextInt();

                    System.out.print("Dia: ");
                    int dia = leia.nextInt();

                    LocalDate data = LocalDate.of(ano, mes, dia);

                    Recorde r = new Recorde(data, tempo, nome);

                    pilha.push(r);

                    break;

                case 2:

                    Recorde topo = pilha.peek();

                    if (topo != null)
                        System.out.println(topo);
                    else
                        System.out.println("Pilha vazia");

                    break;

                case 3:

                    Recorde removido = pilha.pop();

                    if (removido != null)
                        System.out.println("Removido: " + removido);

                    break;

                case 4:

                    pilha.listar();
                    break;

            }

        } while (opcao != 0);

    }
}