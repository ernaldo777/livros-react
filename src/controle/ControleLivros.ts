
import Livro from '../modelo/Livro';

const livros: Array<Livro> = [
  { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1'] },
  { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 1', 'Autor 2'] },
  { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 1', 'Autor 2', 'Autor 3'] },
  { codigo: 4, codEditora: 3, titulo: 'Livro 4', resumo: 'Resumo do Livro 4', autores: ['Autor 4', 'Autor 5'] }
];

class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = Math.max(...livros.map(livro => livro.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      livros.splice(indice, 1);
    }
  }
}

export default ControleLivro;
