console.log;
function pesquisar(){
    let= document.getElementById("resultado-pesquisa");
    let= document.getElementById("campo-pesquisa").value;

    if(campoPesquisa==""){
        section.innerHTML="<P>Precisa digitar alguma coisa!</p>"
        return
    }
campoPesquisa=campoPesquisa.toLowerCase()
let resultado="";
let titulo="";
let descricao="";

for (let dado of dados){
    titulo=dado.titulo.toLowerCase()
    descricao=dado.descricao.toLowerCase()
    if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)){
        resultado += `
          <div class="item-resultado">
          <h2><a href="#" target="_blank">${dados[0].titulo}</a></h2>
          <p>${dados[0].descricao}</p>
          </div>
          `;
    }
}
if(!resultado){
    resultado="<p>Nada foi encontrado</p>"
}
section.innerHTML=resultado;
}