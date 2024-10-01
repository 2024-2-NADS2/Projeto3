using System;

public class Doacao
{
    // Atributos
    private string _nomeDoador;
    private string _itemDoado;
    private double _quantidade;
    private DateTime _dataDoacao;
    private string _destino;

    // Construtor
    public Doacao(string nomeDoador, string itemDoado, double quantidade, DateTime dataDoacao, string destino)
    {
        _nomeDoador = nomeDoador;
        _itemDoado = itemDoado;
        _quantidade = quantidade;
        _dataDoacao = dataDoacao;
        _destino = destino;
    }

    // Métodos Get e Set
    public string GetNomeDoador() { return _nomeDoador; }
    public void SetNomeDoador(string nomeDoador) { _nomeDoador = nomeDoador; }

    public string GetItemDoado() { return _itemDoado; }
    public void SetItemDoado(string itemDoado) { _itemDoado = itemDoado; }

    public double GetQuantidade() { return _quantidade; }
    public void SetQuantidade(double quantidade) { _quantidade = quantidade; }

    public DateTime GetDataDoacao() { return _dataDoacao; }
    public void SetDataDoacao(DateTime dataDoacao) { _dataDoacao = dataDoacao; }

    public string GetDestino() { return _destino; }
    public void SetDestino(string destino) { _destino = destino; }

    // Método para exibir detalhes da doação
    public void ExibirDetalhes()
    {
        Console.WriteLine($"Doador: {_nomeDoador}, Item: {_itemDoado}, Quantidade: {_quantidade}, Data: {_dataDoacao.ToShortDateString()}, Destino: {_destino}");
    }
}

public class Program
{
    // Método Main - Ponto de entrada do programa
    public static void Main(string[] args)
    {
        // Exemplo de interação com a classe Doacao
        Console.WriteLine("Bem-vindo ao Sistema de Doações!");

        // Coleta de dados do doador e da doação
        Console.Write("Nome do Doador: ");
        string nomeDoador = Console.ReadLine();

        Console.Write("Item Doado: ");
        string itemDoado = Console.ReadLine();

        Console.Write("Quantidade: ");
        double quantidade = Convert.ToDouble(Console.ReadLine());

        Console.Write("Destino: ");
        string destino = Console.ReadLine();

        // Criando a doação com base nos dados fornecidos
        Doacao novaDoacao = new Doacao(nomeDoador, itemDoado, quantidade, DateTime.Now, destino);

        // Exibindo os detalhes da doação
        Console.WriteLine("\nDetalhes da Doação:");
        novaDoacao.ExibirDetalhes();
    }
}
