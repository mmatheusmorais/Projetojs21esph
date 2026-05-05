// LIMPEZA

const email="       email@email.com   ";
//trim- remove os espaçoes Início e fim
const emailLimpo= email.trim();
console.log(emailLimpo)

//VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("Email válido")
}else{
    console.log("Email inválido")
}

//TRANFORMAÇÃO DE TEXTO

const tituloArtigo="Como aprender JAVA RAIZ";
//metodo upper(maiúsculo) e low(minúsculo)
const texto1 = tituloArtigo.toLowerCase();
console.log(texto1)
//split- transfroma o texto em array
const texto2 =tituloArtigo.split(" ")
console.log(texto2)
//join- junta tudo em uma unica string 
const texto3 = texto2.join(" ")
console.log(texto3)
//metodo toFixad


const precoProduto=199.99;
const desconto=0.15; //15%
const precoFinal=precoProduto * (1 - desconto)
console.log(precoFinal)
// ``- template strings - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`);


//DOM- (DOCUMENTO OBJECT MODEL)

const titulo=document.getElementById("titulo")

titulo.innerText= "O DOM Mudou o Texto";

titulo.style.color="blue";

/* CRIANDO O APP */
const produtos =[
    {nome:"Teclado Mecânico",preco:300,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor Gamer",preco:1300,emPromocao:true},
    {nome:"Pad Mouse XL",preco:400,emPromocao:false},
];

const container=document.getElementById("listar-produtos");
const mostrarTotal = document.getElementById("resultado-total");

//Map: Transforma o arry de objetos em um arry de strings  html e css

function todosprodutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos=lista.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: R$ ${item.preco}</p>
            ${item.emPromocao ? '<span class="tag">Promoção</span>':''}
        </div>
        `).join('');//Transforma o array em uma unica string

        container.innerHTML=htmlProdutos;

}

//FILTER- cria uma nova lista apenas com oque selecionou

function filtrarpromocoes(){
    const promocionais= produtos.filter(item => item.emPromocao);
    todosprodutos(promocionais);
//REDUCE -Reduz o array a um unico valor (soma dos precos)
}

function calculartotal(){
    const total =produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
     mostrarTotal.innerText= `Valor Total R$ ${total}`; 
}

// Exercício 1: O Dashboard do Instrutor (Filter + Map)

// Contexto: Você recebeu um array de objetos representando alunos. Cada objeto contém o nome, a nota final e a frequência (em porcentagem).

// Enunciado:
// Crie uma página HTML que contenha um botão chamado "Gerar Lista de Aprovados". Ao clicar no botão, o seu script deve:

// Filtrar apenas os alunos que possuem nota igual ou superior a 7 e frequência igual ou superior a 75%.

// Mapear esses alunos aprovados para criar uma lista de cards no HTML exibindo apenas o nome e uma mensagem de "Parabéns!".

// Exibir o resultado em uma div com o id lista-aprovados.

// Dados para teste:

const alunos = [
    { nome: "Ana", nota: 8.5, frequencia: 90 },
    { nome: "Beto", nota: 5.0, frequencia: 80 },
    { nome: "Carlos", nota: 9.0, frequencia: 60 },
    { nome: "Daniela", nota: 7.5, frequencia: 85 }
];

