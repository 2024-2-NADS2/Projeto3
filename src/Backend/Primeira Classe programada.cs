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
    public string GetNomeDoador()
    {
        return _nomeDoador;
    }

    public void SetNomeDoador(string nomeDoador)
    {
        _nomeDoador = nomeDoador;
    }

    public string GetItemDoado()
    {
        return _itemDoado;
    }

    public void SetItemDoado(string itemDoado)
    {
        _itemDoado = itemDoado;
    }

    public double GetQuantidade()
    {
        return _quantidade;
    }

    public void SetQuantidade(double quantidade)
    {
        _quantidade = quantidade;
    }

    public DateTime GetDataDoacao()
    {
        return _dataDoacao;
    }

    public void SetDataDoacao(DateTime dataDoacao)
    {
        _dataDoacao = dataDoacao;
    }

    public string GetDestino()
    {
        return _destino;
    }

    public void SetDestino(string destino)
    {
        _destino = destino;
    }

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
        // Criando uma instância da classe Doacao
        Doacao doacao = new Doacao("Eduarda", "Alimentos", 10.5, DateTime.Now, "ONG Sabor Solidário");

        // Exibindo detalhes da doação
        doacao.ExibirDetalhes();
    }
}
