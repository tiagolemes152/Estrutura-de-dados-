public class PilhaRecorde {

    private Recorde[] pilha;
    private int topo;

    public PilhaRecorde(int tamanho) {
        pilha = new Recorde[tamanho];
        topo = -1;
    }

    public boolean estaVazia() {
        return topo == -1;
    }

    public void push(Recorde r) {

        if (!estaVazia()) {
            if (r.getTempo() >= pilha[topo].getTempo()) {
                System.out.println("Recorde não superado!");
                return;
            }
        }

        if (topo == pilha.length - 1) {
            resize();
        }

        topo++;
        pilha[topo] = r;

        System.out.println("Novo recorde inserido!");
    }

    public Recorde pop() {

        if (estaVazia()) {
            System.out.println("Pilha vazia");
            return null;
        }

        Recorde removido = pilha[topo];
        topo--;

        return removido;
    }

    public Recorde peek() {

        if (estaVazia()) {
            return null;
        }

        return pilha[topo];
    }

    public void listar() {

        if (estaVazia()) {
            System.out.println("Nenhum recorde.");
            return;
        }

        for (int i = topo; i >= 0; i--) {
            System.out.println(pilha[i]);
        }
    }

    private void resize() {

        Recorde[] nova = new Recorde[pilha.length * 2];

        for (int i = 0; i < pilha.length; i++) {
            nova[i] = pilha[i];
        }

        pilha = nova;
    }
}