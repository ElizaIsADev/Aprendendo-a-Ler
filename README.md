# 📚 Aprendendo a Ler

Bem-vindo ao **Aprendendo a Ler**! Este é um projeto super legal para ajudar as pessoas a aprenderem a ler de uma maneira divertida e interativa. 🎉

## 🚀 Começando

Para começar a usar o projeto, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/aprendendo-a-ler.git
    cd aprendendo-a-ler
    ```

2. Abra o arquivo `index.html` no seu navegador favorito.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Para a estrutura da página.
- **CSS3**: Para deixar tudo bonito.
- **JavaScript**: Para a mágica acontecer.

## 📂 Estrutura do Projeto

```plaintext
aprendendo-a-ler/
├── index.html
├── styles.css
├── dados.js
└── app.js
```

## 📜 Funcionalidades

- **Pesquisa Interativa**: Digite uma letra e veja os resultados aparecerem como mágica!
- **Design Responsivo**: Funciona em qualquer dispositivo, seja desktop ou mobile.
- **Fácil de Usar**: Interface simples e intuitiva.

## 🤓 Como Funciona

- **Digite uma letra no campo de pesquisa.**
- **Clique no botão “Clica em mim!”.**
- **Veja os resultados aparecerem na seção de resultados.**
 
## 🧙‍♂️ Código JavaScript

Aqui está um trechinho do código JavaScript que faz tudo funcionar:

    function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado :/</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
    }


## 📅 Atualizações

2024: Projeto iniciado e primeira versão lançada.
