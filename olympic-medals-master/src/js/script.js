//div -> class linha
//div -> coluna especificar classe 
//span
//div linha -> país + imagem + spam

function criarTemplateLinha(){

    //CRIANDO LINHA DO QUADRO
   let linha = document.createElement("div")
   //ADICIONANDO CLASSE PARA A DIV LINHA
   linha.classList.add("linha")

   //colunas
   let coluna_rank = document.createElement("div")
   coluna_rank.classList.add("coluna","coluna-rank")

   //CRIANDO SPAN TITULO RANK
   Let coluna_rank_titulo = document.createElement("span")
   coluna_rank_titulo.innerText = "1º"
   coluna_rank.appendChild(coluna_rank_titulo)

   linha.appendChild(coluna_rank)

   console.log(coluna_rank)

}
criarTemplateLinha()

//função qeu cria a coluna rank
function criaCOluna_rank(){

    //1 COLUNA
}