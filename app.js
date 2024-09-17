function pesquisar(){
    //console.log(dados);

    let section = document.getElementById("resultados-pesquisa")
    
    let resultados = ""
    
    //para cada dado dentro de uma lista de dados
    for(let dado of dados) {
        resultados += `
        <div class="item-resultado">
        <h2><a href="#"target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
    </div>`
    }
    
    section.innerHTML = resultados
    
}
