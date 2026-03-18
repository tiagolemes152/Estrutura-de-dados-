import java.time.LocalDate;

public class Recorde {

    private LocalDate data;
    private double tempo;
    private String nome;

    public Recorde(LocalDate data, double tempo, String nome) {
        this.data = data;
        this.tempo = tempo;
        this.nome = nome;
    }

    public LocalDate getData() {
        return data;
    }

    public double getTempo() {
        return tempo;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return "Atleta: " + nome +
                " | Tempo: " + tempo +
                " | Data: " + data;
    }
}