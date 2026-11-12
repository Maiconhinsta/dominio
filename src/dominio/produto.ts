export class Produto {
  nome: string;
  precoCentavos: number;
  unidade: string;
  categoria: string;

  constructor(nome: string, precoCentavos: number, unidade: string, categoria: string) {
    this.nome = nome;
    this.precoCentavos = precoCentavos;
    this.unidade = unidade;
    this.categoria = categoria;
  }

  precoEmReais(): string {
    const reais = this.precoCentavos / 100;
    return "R$ " + reais.toFixed(2).replace(".", ",");
  }

  precoPorQuantidade(quantidade: number): number {
    return (this.precoCentavos * quantidade) / 100;
  }
}